import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import {
  Attribute,
  attributesLeftByDefault,
  attributesNeededByDefault,
  attributesValues,
  Operation,
  operations,
} from '../../../config/query-builder.config';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatIcon } from '@angular/material/icon';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { UserService } from '../../../services/user.service';
import { TableComponent } from './sub-components/table.component';
import { catchError, of, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {Pages} from '../../../utils/routes';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-query-builder',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatIconButton,
    MatIcon,
    MatOption,
    CdkDropList,
    MatSelect,
    CdkDrag,
    TableComponent,
    AsyncPipe,
    MatProgressSpinner,
    RouterLink,
  ],
  templateUrl: './query-builder.component.html',
  standalone: true,
  styleUrl: './query-builder.component.scss',
})
export class QueryBuilderComponent {
  public attibutesToIgnore: Attribute[] = attributesLeftByDefault;

  public attibutesToSend: Attribute[] = attributesNeededByDefault;

  public queryBuilderForm: FormGroup;

  public allAttributes: Attribute[] = attributesValues;

  public operations: Operation[] = operations;

  public data$: any = of([]);

  public isLoading: boolean = false;

  public errorMessage: string = '';

  public searchClicked: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.queryBuilderForm = this.fb.group({
      filters: this.fb.array([]),
    });
  }

  get filters(): FormArray {
    return this.queryBuilderForm.get('filters') as FormArray;
  }

  public drop(event: CdkDragDrop<Attribute[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public createFilterGroup(): FormGroup {
    return this.fb.group({
      value: ['', Validators.required],
      key: ['', Validators.required],
      operator: ['', Validators.required],
    });
  }

  public addFilter(): void {
    this.filters.push(this.createFilterGroup());
  }

  public removeFilter(index: number): void {
    this.filters.removeAt(index);
  }

  public search(): void {
    this.searchClicked = true;
    if (this.filters.invalid) return;
    this.isLoading = true;
    const searchQuery = this.queryBuilderForm.value.filters.map(
      (filter: any) => ({
        key: filter.key,
        operator: filter.operator,
        value: filter.value,
      }),
    );
    const parameters = this.attibutesToSend.map((attr) => attr.attribute);
    const graphQLQuery = `
  query {
    dynamicQuery(searchquery: ${JSON.stringify(searchQuery, null, 2).replace(/"(\w+)":/g, '$1:')}) {
      parameters { ${parameters.join(' ')} }
    }
  }
`;
    this.data$ = this.userService.getUsers(graphQLQuery).pipe(
      tap(() => {
        this.searchClicked = false;
        this.isLoading = false;
        this.errorMessage = '';
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }),
      catchError((error) => {
        this.isLoading = false;
        this.searchClicked = false;
        this.errorMessage = 'An error occurred while fetching data.';
        return of([]);
      }),
    );
  }

  public get attributeToSendKeys(): string[] {
    return Object.values(this.attibutesToSend).map((attr) => attr.attribute);
  }

  protected readonly pages = Pages;
}

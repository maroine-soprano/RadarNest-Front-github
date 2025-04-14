import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of, tap } from 'rxjs';
import { StrategyData } from '../../../config/ai.config';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, MatProgressSpinner],
})
export class AIComponent implements OnInit {
  public form!: FormGroup;
  public strategy$: Observable<StrategyData> = of({} as StrategyData);
  public isLoading: boolean = false;
  public errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      device: ['', [Validators.required, Validators.minLength(3)]],
      deviceBrand: ['', [Validators.required, Validators.minLength(3)]],
      deviceModel: ['', [Validators.required, Validators.minLength(1)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      temperature: ['', [Validators.required, Validators.minLength(1)]],
      adsPlatform: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      this.strategy$ = this.httpClient
        .post<StrategyData>(environment.backend + 'llm', this.form.value)
        .pipe(
          tap(() => {
            this.errorMessage = '';
            this.isLoading = false;
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }),
          catchError((error) => {
            this.errorMessage = 'An error occurred while fetching data.';
            this.isLoading = false;
            return of({} as StrategyData);
          }),
        );
    }
  }
}

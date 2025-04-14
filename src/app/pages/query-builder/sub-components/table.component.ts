import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    TitleCasePipe,
    MatSortHeader,
    MatSort,
    MatProgressSpinner,
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input()
  public displayedColumns: string[] = [];
  @Input()
  public data: any = [];

  public currentPage: number = 0;
  public pageSize: number = 10;
  public totalPages: number = 0;
  public paginatedData: any[] = [];
  public exportLoading: boolean = false;

  public ngOnInit() {}

  public calculatePagination() {
    this.totalPages = Math.ceil(this.data.length / this.pageSize);
    this.updatePaginatedData();
  }

  public updatePaginatedData() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  public goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.currentPage = 0;
      this.pageSize = 10;
      this.totalPages = 0;
      this.calculatePagination();
    }
  }

  public exportTable() {
    const fileName = 'ExcelSheet.xlsx';
    let table = document
      .getElementsByTagName('table')[0]
      .cloneNode(true) as HTMLElement;
    table.getElementsByTagName('tbody')[0].innerHTML = '';
    this.data.forEach((el: any) => {
      const tr = document.createElement('tr');
      this.displayedColumns.forEach((col) => {
        const td = document.createElement('td');
        td.innerText = el['parameters'][col];
        tr.appendChild(td);
      });
      table.getElementsByTagName('tbody')[0].appendChild(tr);
    });
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, fileName);
  }
}

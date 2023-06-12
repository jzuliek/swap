import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataItem } from 'src/app/Interface/DataItem';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnChanges, OnInit {
  

  @Input() data: DataItem[] = [];
  @Input() displayedColumns: string[] = [];

  constructor(public dialog:MatDialog){
    
  }


  dataSource = new MatTableDataSource<DataItem>();


  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log(filterValue)
  }

  onClick(el: any){
    this.dialog.open(DialogboxComponent, {
      data: this.data
    })
  }

  getValue(event: Event): string{
    return (event.target as HTMLInputElement).value
  }
}

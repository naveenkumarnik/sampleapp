import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactiondetailsgrid',
  templateUrl: './transactiondetailsgrid.component.html',
  styleUrl: './transactiondetailsgrid.component.scss'
})
export class TransactiondetailsgridComponent implements OnInit {
  rowData!: any[]
  columnDefs!: any[]
  ngOnInit(): void {
    this.rowData = [
      {
          athlete: 'Michael Phelps',
          medals: {
              gold: 8, silver: 1, bronze: 0
          }
      }
  ];
  this.columnDefs = [
      { field: 'athlete' },
      // Using dot notation to access nested property
      { field: 'medals.gold', headerName: 'Gold' },
  ];  }
 
  
  
}

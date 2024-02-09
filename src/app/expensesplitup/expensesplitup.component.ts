import { Component, OnInit } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';

@Component({
    selector: 'app-expensesplitup',
    templateUrl: './expensesplitup.component.html',
    styleUrl: './expensesplitup.component.scss'
})
export class ExpensesplitupComponent implements OnInit {
    data: any;
    options: any;
    columnDefs: (ColDef<any, any> | ColGroupDef<any>)[] | null | undefined;
    public themeClass: string =
        "ag-theme-quartz";
    public defaultColdef: ColDef = {
        filter: true,
        sortable: true,
        minWidth: 90,
        // maxWidth:150
    }
    gridOptions: GridOptions = {
        rowSelection: 'single',
        defaultColDef: this.defaultColdef,
    }
    rowData: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        this.columnDefs = [
            { field: 'trasactionNumer', headerName: 'Transaction No' },
            { field: 'upiId', headerName: 'UPI Id' },
            { field: 'bankName', headerName: 'Bank' },
            { field: 'paymentPlatform', headerName: 'Payment Platform' },
            { field: 'paidAmount', headerName: 'Paid Amount' },
            { field: 'status', headerName: 'Status' },
        ];
        this.data = {
            labels: ['Food', 'Dress', 'Rent', 'Movie', 'Outing', 'Grocery'],
            datasets: [
                {
                    data: [540, 325, 702, 100, 400, 600],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--pink-200'), documentStyle.getPropertyValue('--green-100'), documentStyle.getPropertyValue('--yellow-500'),
                    documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--red-300')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--pink-100'), documentStyle.getPropertyValue('--green-100'),
                    documentStyle.getPropertyValue('--yellow-100'),
                    documentStyle.getPropertyValue('--green-100'), documentStyle.getPropertyValue('--red-100')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }
}

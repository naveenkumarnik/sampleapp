import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import mockData from '../mockdata/mockdata.json'

@Component({
  selector: 'app-transactiondetailsgrid',
  templateUrl: './transactiondetailsgrid.component.html',
  styleUrl: './transactiondetailsgrid.component.scss'
})
export class TransactiondetailsgridComponent implements OnInit {

  public seletedRecord: any;
  form = new FormGroup({});
  rowData!: any[]
  columnDefs!: any[]
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
    onRowClicked: (event: any) => this.getSelectedRowData(event),
    onGridReady: (event: any) => this.onGridReady(event)
  }
  gridApi!: GridApi;
  model: any;

  fields: FormlyFieldConfig[] = [
    {
      key: 'upiId',
      type: 'label',
      templateOptions: {
        label: 'UPI ID :',
        readonly: true,
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.upiId
      }
    },
    {
      key: 'bankName',
      type: 'label',
      props: {
        label: 'Bank Name :',
        fieldMode: 'inquiry',
        labelClasses:'col-md-5',
        valueClasses:'col-md-6',
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.bankName
      }
    },
    {
      key: 'debit',
      type: 'label',
      props: {
        label: 'Debit :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.debit
      }
    },
    {
      key: 'credit',
      type: 'label',
      props: {
        label: 'Credit :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.credit
      }
    },
    {
      key: 'paymentPlatform',
      type: 'label',
      props: {
        label: 'Payment Platform :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.paymentPlatform
      }
    },
    {
      key: 'paidAmount',
      type: 'label',
      props: {
        label: 'Paid Amount :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.paidAmount
      }
    },
    {
      key: 'status',
      type: 'label',
      props: {
        label: 'Status :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.status
      }
    },
    {
      key: 'balance',
      type: 'label',
      props: {
        label: 'Balance :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.balance
      }
    },
    {
      key: 'dateAndTime',
      type: 'label',
      props: {
        label: 'Date&Time :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.dateAndTime
      }
    },
    {
      key: 'place',
      type: 'label',
      props: {
        label: 'Place :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.place
      }
    },
    {
      key: 'trasactionNumer',
      type: 'label',
      props: {
        label: 'TrasactionNumer :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.trasactionNumer
      }
    },
    {
      key: 'transactionId',
      type: 'label',
      props: {
        label: 'TransactionId :',
        type: 'text',
        readonly: true
      },
      expressionProperties:{
        'templateOptions.value':(model) => model.transactionId
      }
    },
  ];
  ngOnInit(): void {
    this.rowData = JSON.parse(JSON.stringify(mockData));
    this.columnDefs = [
      { field: 'trasactionNumer', headerName: 'Transaction No' },
      { field: 'upiId', headerName: 'UPI Id' },
      { field: 'bankName', headerName: 'Bank' },
      { field: 'paymentPlatform', headerName: 'Payment Platform' },
      { field: 'paidAmount', headerName: 'Paid Amount' },
      { field: 'status', headerName: 'Status' },
    ];
  }

  getSelectedRowData(event: any) {
    this.gridApi = event.api;
    this.seletedRecord = this.gridApi.getSelectedRows();
    this.model = this.seletedRecord[0];
  }

  onGridReady = (event: GridReadyEvent) => {
    // Store the api for later use
    this.gridApi = event.api;
    this.gridApi.getRowNode('0')?.setSelected(true)
    this.model = this.gridApi.getSelectedRows()[0];
  }


}

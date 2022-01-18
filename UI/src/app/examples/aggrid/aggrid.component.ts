import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.css'],
})
export class AggridComponent implements OnInit {
  constructor() {}
  columnDefs = [
    {
      headerName: 'Make',
      headerClass: 'headerclass',
      field: 'make',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Model',
      headerClass: 'headerclass',
      field: 'model',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Price',
      headerClass: 'headerclass',
      field: 'price',
      sortable: true,
      filter: true,
    },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];
  ngOnInit(): void {}
  ongridclick(event: any) {
    console.log(event.data);
    this.assignobj(event.data);
  }
  assignobj(event: any) {}
}

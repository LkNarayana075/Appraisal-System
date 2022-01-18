import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from '../../services/sampleformdataservices.service';

@Component({
  selector: 'app-serviceoperators',
  templateUrl: './serviceoperators.component.html',
  styleUrls: ['./serviceoperators.component.css'],
})
export class ServiceoperatorsComponent implements OnInit {
  employeedata: any;
  rowHeight: any;
  gridOptions: any;
  rowClassRules: any;
  result: any;
  paginationPageSize: any;
  private gridApi: any;
  searchdata: any;
  filterdata: any;
  gridApiuser: any;
  api: any;
  constructor(private exampleservice: SampleformdataservicesService) {
    this.rowHeight = 45;
    this.paginationPageSize = 10;

    this.rowClassRules = {
      'sick-days-warning': function (params: any) {
        return params.node.rowIndex % 2 !== 0;
      },
    };
  }
  // AG Grid Instalization

  columnDefsToViewClients = [
    {
      headerName: 'Employee Name',
      unSortIcon: true,
      field: 'employee_name',
      checkboxSelection: true,
      cellRenderer: function (params: any) {
        return (
          '<span style="color:blue;font-weight:bold;">' +
          params.value +
          '</span>'
        );
      },
    },
    {
      headerName: 'Age',
      field: 'employee_age',
      unSortIcon: true,
    },
    {
      headerName: 'Salary',
      field: 'employee_salary',
      unSortIcon: true,
    },
    {
      headerName: 'Edit',
      field: 'id',
      unSortIcon: true,
      callRenderer: function (params: any) {
        return (
          '<a routerLink="./getdata?id=' +
          params.value +
          '" class="btn btn-primary">Edit</a>'
        );
      },
    },
  ];
  ngOnInit(): void {
    // this.getemployees();
    this.gridOptions = {
      animateRows: true,
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      enableColResize: true,
      headerHeight: 35,
      rowSelection: 'single',
    };
    this.getemployees();
  }
  onGridReady(event: any) {
    console.log('ongridready ' + event);
    //event.api.setRowData(event);
    // this.gridApiuser = event.api;
  }
  editStatus(event: any) {
    console.log(event);
  }
  onSelectionChanged(event: any) {
    const selectedData = this.api.getSelectedRows();

    console.log('selected row data' + selectedData);
  }
  getemployees() {
    this.exampleservice.getemployees().subscribe(
      (res) => {
        this.result = res;
        console.log('mapdata', this.result);
      },
      () => {
        console.log('error');
      }
    );
  }

  quicksearch() {
    this.searchdata = this.filterdata;
    this.gridApiuser.setQuickFilter(this.searchdata);
  }
}

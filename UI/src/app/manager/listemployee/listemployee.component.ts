import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { Router, ActivatedRoute } from '@angular/router'
import { FetchId } from 'src/app/models/DataById';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css'],
})
export class ListemployeeComponent implements OnInit {
  employeelist: any;
  rowSelection: any;
  Url: string;
  constructor(private employeeService:SampleformdataservicesService,
    private router: Router,
    private route: ActivatedRoute,) {}
  manager_employees: any
  title = 'ManagerGrid';
  empList:any;
  departmentName:any;
  rowData:any;
  api:any;
  gridOptions:any;
  rowHeight:any;
  filterdata:any;
  columnDefs = [
    {
      headerName: 'Employee ID',
      headerClass: 'headerclass',
      field: 'Appraisee.appraisee_id',
      sortable: true,
      filter: true,
      height:45,
      cellStyle: { 'font-size': '14px' },
      
    },
    {
      headerName: 'Name',
      // field: 'Appraisee.first_name',
      filter: true,
      cellStyle: { 'font-size': '14px' },
      cellRenderer: this.createHyperLink.bind(this), 
      valueGetter(params: any) {
        // console.log('params', params.data.Appraisee.first_name)
        return (
          params.data['Appraisee'].first_name +
          ' ' +
          params.data['Appraisee'].last_name
        )
      },
    },
    {
      headerName: 'Designation',
      field: 'Appraisee.designation.designation_name',
      filter: true,
      cellStyle: { 'font-size': '14px' },
    },
    {
      headerName: 'Mobile Number',
      field: 'Appraisee.mobile_number',
      filter: true,
      cellStyle: { 'font-size': '14px' },
    },
    {
      headerName: 'Mail Id',
      field: 'Appraisee.email_id',
      filter: true,
      cellStyle: { 'font-size': '14px' },
    },
  ];
  onFilterTextBoxChanged(event: any) {
    console.log(event.data);
  }
    
 ngOnInit(): void {
    this.gridOptions = {
      animateRows: true,
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      enableColResize: true,
      headerHeight: 45,
      rowSelection: 'single',
    };
    this.rowHeight=45;
    this.rowSelection = 'single';

      this.employeeList();
  
  }
 
  // this.employeeService.pythonlistOfEmployees().subscribe(res =>{
  //   this.employeelist=res;

  //   console.log(this.employeelist);
  //   })

  onGridReady(event:any){}
  editStatus(event:any){}
  onSelectionChanged(event:any){}

  employeeList(){
    this.employeeService.pythonManagerListOfEmployees().subscribe(res =>{
    this.employeelist=res;
    this.rowData=this.employeelist;
    })
  }

  
  createHyperLink(params: { data: any; value: any; }): any {
    if (!params.data) { return; }
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `<a href="${this.homeUrl}" > ${params.value} </a> `;
    //sendId.employeeId=params.data.Id;
    spanElement.addEventListener('click', ($event) => {
      $event.preventDefault()

      console.log(params.data.Appraisee.id)

      this.Url=this.homeUrl + params.data.Appraisee.id;
      console.log(this.Url)

      this.router.navigate([this.Url]);

    });
    return spanElement;
  }

  get homeUrl(): string {
    return './manager/manager-rating/';
  }
 
}


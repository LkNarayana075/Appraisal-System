import { Component, OnInit } from '@angular/core'
import { HrServicesService } from 'src/app/services/hr-services.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { NotificationsService } from '../../services/-notifications.service';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import * as _ from 'lodash';

declare let $: any;
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  response: any;
  employeelist: any;
  managerlist: any;
  rowSelection: any;
  assignManagerForm: FormGroup;
  selectedRows: any;
  gridApi: any;
  manager_id: number;
  assign_manager: any;
  disabledisqualify: boolean = true;
  disabledAssign: boolean = true;
  manager: null;
  title = 'HrGrid';
  empList:any;
  departmentName:any;
  rowData:any;
  api:any;
  gridOptions:any;
  rowHeight:any;
  filterdata:any;
  fileReaded: any;
  csv: any;
  uploaddata: any;
  result: any;
  unquiedepartment:any;
  paramEmp: any = [];
  uploademp: FormGroup;
  employeeobj: any;
  employeeNames: any;
  department:any;
  item:any;
  department_list: any;
  employeslist : any;
  departmentemployees: any;
  DepartmentData: any;
  defaultitem="select Department"
  constructor(private employeeService: SampleformdataservicesService, private fb: FormBuilder, private notification: NotificationsService,) {

  }


  

  columnDefs = [
    {
      headerName: 'Appraisee id',
      headerClass: 'headerclass',
      field: 'appraisee_id',
      sortable: true,
      filter: true,
      height: 45,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    {
      headerName: 'Name',
      headerClass: 'headerclass',
      sortable: true,
      filter: true,
      height: 45,
      sort: 'desc',
      valueGetter(params: { data: { first_name: string; last_name: string; }; }) {
        return params.data.first_name + ' ' + params.data.last_name;
      },
    },
    {
      headerName: 'Designation',
      headerClass: 'headerclass',
      field: 'designation_name',
      sortable: true,
      filter: true,
      height: 45,
    },
    {
      headerName: 'Assign to',
      headerClass: 'headerclass',
      sortable: true,
      filter: true,
      height: 45,
      valueGetter(params: { data: { manager_first_name: string; manager_last_name: string; }; }) {
        return params.data.manager_first_name + ' ' + params.data.manager_last_name;
      },
    },
    {
      headerName: 'Status',
      headerClass: 'headerclass',
      field: 'status',
      sortable: true,
      filter: true,
      height: 45,
    },
    // {
    //   headerName: 'Rating',
    //   headerClass: 'headerclass',
    //   field: '',
    //   sortable: true,
    //   filter: true,
    //   height:45,
    // },

  ];




  onFilterTextBoxChanged(event: any) {
    console.log(event.data);
    //this.gridOptions.api.setQuickFilter(test);
  }
  assignobj(event: any) { }

  ngOnInit(): void 
  {
    
    
      // this.employeeService.getdepartmentList().subscribe(data=>{
      //   this.department_list = data;
      
      //   console.log(this.department_list);
      
    // validations
    this.uploademp = this.fb.group({
      fileemployee: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^.+\.(xlsx|xls|csv)$/
          ),
     
        ],
      ],
    
    });
   this.employeeList();
    this.gridOptions = {
      animateRows: true,
      onGridSizeChanged: () => {
        this.gridOptions.api.sizeColumnsToFit();
      },
      resizable: true,
      headerHeight: 45,
      rowSelection: 'single',
    };
    this.rowHeight = 45;
    this.rowSelection = 'multiple';

    this.employeeList();
    this.managerList();

    this.assignManagerForm = this.fb.group({
      manager: ['', [Validators.required]],
    });

    this.getdepartment();
  
  }

  // this.employeeService.pythonlistOfEmployees().subscribe(res =>{
  //   this.employeelist=res;

  //   console.log(this.employeelist);
  //   })

  onGridReady(event: any) {
    this.gridApi = event.api;
  }
  editStatus(event: any) { }

  onSelectionChanged() {                         // geting and pushing the checkbox value from AG grid
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectedRows.length > 0) {
      this.disabledisqualify = false;
      this.disabledAssign = false;
    } else {
      this.disabledisqualify = true;
      this.disabledAssign = true;
    }
    console.log(this.selectedRows);
  }

   

  employeeList() {                             // Getting employee list 
    this.employeeService.pythonListOfEmployees().subscribe(res => {
      this.employeelist = res;
      this.rowData = this.employeelist;
    

    
    });
    

  }

  
  employeeupload(fileInput: any){
    //read file from input
    this.fileReaded = fileInput.target.files[0];
      
      console.log('fileinput', this.fileReaded)
      let reader: FileReader = new FileReader();
      reader.readAsText(this.fileReaded);
      
       reader.onload = (e) => {
       this.csv = reader.result;
       let allTextLines = this.csv.split(/\r|\n|\r/);
       let headers = allTextLines[0].split(',');
       let lines = [];
      
        for (let i = 0; i < allTextLines.length; i++) {
          // split content based on comma
          let data = allTextLines[i].split(',');
          if (data.length === headers.length) {
            let tarr = [];
            for (let j = 0; j < headers.length; j++) {
              tarr.push(data[j]);
            }
      
           // log each row to see output 
           console.log(tarr);
           lines.push(tarr);
        }
       }
       // all rows in the csv file 
       console.log("array", lines);
       this.uploaddata = lines;
      } 
      
  }
  filesubmit()
  {
    console.log('uploadfile', this.uploaddata);
    // this.employeeService.bulkupload(this.uploaddata).subscribe(
    //   (res) => {
    //     this.result = res;
    //     this.notification.showSuccess('Login successfully !!', 'Success');
    //   //  console.log('mapdata', this.result);
    //   },
    //   () => {
    //     console.log('error');
    //   }
    // );
  }


  managerList() {
    this.employeeService.pythonAssignManagers().subscribe(res => {  //Getting manager list
      this.managerlist = res;
      console.log(this.managerlist);
    })
  }
  onItemChange(value: any) {                    // Storing manager id for assign
    this.manager_id = value;
  }
  onSubmit() {                                  // for assign manager button click
    this.selectedRows.forEach((_element: any) => {
      this.paramEmp.push(_element.id);
    });

    let payLoad = {
      "emp_list": this.paramEmp,
      "manager_id": this.manager_id
    }
    this.employeeService.assignToManager(payLoad).subscribe(res => {
      this.notification.showSuccess(res.Message, 'Success');
      $('#exampleModal').modal("hide");
      this.employeeList();
      this.disabledisqualify = true;
      this.disabledAssign = true;
      this.selectedRows=[];
      this.paramEmp=[];
      this.rowData='';
      this.manager = null;
      console.log( this.rowData);
    })
  }
  disqualifySubmit() {                              // for disqualify popup yes button click
    this.selectedRows.forEach((_element: any) => {
      this.paramEmp.push(_element.id);              // Pushing the emp list
    });
    let payLoad = {
      "emp_list": this.paramEmp
    }
    this.employeeService.disqualify(payLoad).subscribe(res => {
      this.notification.showSuccess(res.Message, 'Success');
      this.employeeList();
      this.disabledisqualify = true;
      this.disabledAssign = true;
      this.selectedRows=[];
      this.paramEmp=[];
      this.rowData='';
      console.log( this.rowData);
    },
      (error) => {
        if (error.status == 0) {
          this.notification.showError('Something went wrong.Please try again later', 'Error');
        }
      })
  }

  // function fullNameGetter(params) {
  //   return params.data.first_name + ' ' + params.data.last_name;
  // }

  departmentid:number;
  get(event:any){
    console.log(this.departmentid);
    this.employeeService.employeesByDepartment(this.departmentid).subscribe(res=>{
      this.departmentemployees=res;
      this.rowData=this.departmentemployees;
      console.log(this.rowData);
    });

  }
  getdepartment(){
    this.employeeService.getdepartmentList().subscribe(res=>{
      this.DepartmentData=res;
      console.log(this.DepartmentData);
  });
}

}

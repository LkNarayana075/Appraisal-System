import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { EmployeeData } from 'src/app/models/employee';
import { getIsRtlScrollbarOnLeft } from '@fullcalendar/angular';
import { NotificationsService } from '../../services/-notifications.service';
// import { resolve } from 'dns';
import { reject } from 'lodash';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})

export class CreateEmployeeComponent implements OnInit {
  model: any;
  minDate = new Date();
  googlePlacesOptions: any; // class variable
  employeeData:EmployeeData;
  emailexist:boolean = false;
  mobileexist: boolean = false;
  appraiseeidexist: boolean = false;
  emailexit : boolean = false;
  // roles:Roles = new Roles();
  public roleslist:any;
  public departmentslist:any;
  public designationslist:any;
  employeelist: any;
  duplicateEmailid: any;
  existmail: any;
  uniqueEmail: any;
  minDate1: any;
  emailData: any;
  emailobj: { email_id: any; };
  mobileobj: { mobile_number: any; };
  appraiseeidobj: { appraisee_id: any; };
  erroeMsg: any;
  uniqueMobileNo: any;
  existmobile: any;
  existappraiseeid: any;
  uniqueAppraiseeId: any;
  maxDate = new Date();

  constructor(private config: NgbDatepickerConfig,
              private empl:SampleformdataservicesService,
              private notification: NotificationsService) {
    this.googlePlacesOptions = new Options({ componentRestrictions: { country: 'IN' } });// to set the option in google autocomplete
    this.employeeData =  new EmployeeData() 
  }
  
  myform: FormGroup = new FormGroup({
    employeeId: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(/^[ A-Za-z0-9-]*$/)]),[]),
    firstname: new FormControl('', [
      Validators.pattern('^[a-zA-Z]+$'),
      Validators.required,
    ]),
    middlename: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),]),
    mobilenumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(15),
      Validators.pattern('^[0-9]+[0-9]+'),
    ]),
    department: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    dateofjoining: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    role:new FormControl('',[Validators.required])
  });
  // Save(): void {
  //   var datePipe = new DatePipe("en-US");
  //   var joiningdatevalues = datePipe.transform(this.myform.value.dateofjoining, 'yyyy-MM-dd'); // parsing the date in DB format
  //   console.log(joiningdatevalues);
  // }

  Save(): void {
    var datePipe = new DatePipe("en-US");
    var joiningdatevalues = datePipe.transform(this.myform.value.dateofjoining, 'yyyy-MM-dd'); 
    this.employeeData.joining_date = joiningdatevalues; 
    this.employeeData.first_name=this.myform.value.firstname;
    this.employeeData.middle_name=this.myform.value.middlename;
    this.employeeData.last_name=this.myform.value.lastname;
    this.employeeData.email_id=this.myform.value.email;
    this.employeeData.mobile_number=this.myform.value.mobilenumber;
    this.employeeData.department_id=this.myform.value.department;
    this.employeeData.designation_id=this.myform.value.designation;
    this.employeeData.joining_date = joiningdatevalues; 
    this.employeeData.appraisee_id=this.myform.value.employeeId;
    this.employeeData.role_id=this.myform.value.role;
    this.employeeData.location=this.myform.value.location;

     this.empl.createEmployee(JSON.stringify(this.employeeData)).subscribe(res=>
      {  
        console.log(this.employeeData)
        this.notification.showSuccess(res.Message, 'Success');
        // alert("Employee Successfully Added");
        this.myform.reset();
        this.myform.patchValue({role:'',department:'',designation:''})

      },
      (error) => {
        console.log(error)
        console.log(error.status)
        if(error.status==403){
          this.notification.showError(error.error.detail, 'Error');
        }else{
        this.notification.showError('Something Went Wrong', 'Error');
        }
      }
      );

  }

  handleAddressChange(e:any) { // reading the json values from selected address) 
    console.log(e);
  }
  ngOnInit(): void {
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setUTCDate(this.maxDate.getDate() + 30); // setup minimun date for date picker
    this.getRole();
    this.getDepartments();
    this.getDesignations();
    
  }  

  getRole(){
    this.empl.getRolesList().subscribe(res=>{
      this.roleslist = res;
      console.log(this.roleslist)
    });
  }

  getDepartments(){
    this.empl.getdepartmentList().subscribe(
      data =>{       
        this.departmentslist=data;
        console.log(this.departmentslist)
      }
    );
  }

  getDesignations(){
    this.empl.getdesignationList().subscribe(
      data =>{       
        this.designationslist=data;
        console.log(this.designationslist)
      }
    );
  }

  getEmployeesList(){
    this.empl.pythonListOfEmployees().subscribe(res=>{
      this.employeelist=res;
      
    });

  }


  isEmailUnique(event:any){
    console.log("hello")
    this.emailobj = { "email_id" : this.uniqueEmail }
    this.empl.emailValidation(this.emailobj).subscribe(res=>{
    this.emailData = res;
    console.log(this.emailData);
    this.emailexist= false;
    },
    (error) => {
     if (this.emailexist = true){
     this.existmail = this.myform.value.email
     this.myform.controls['email'].reset();
     }
     else 
     {
      this.existmail = '';
     }
     
    }
    );
  }

  isMobilenumUnique(event:any){
    this.mobileobj = { "mobile_number" : this.uniqueMobileNo }
    this.empl.mobileNumValidation(this.mobileobj).subscribe(res=>{
      this.emailData = res;
    console.log(this.emailData);
    this.mobileexist = false;
    },
    (error) => {

      if (this.mobileexist = true){
      this.existmobile = this.myform.value.mobilenumber;

      this.myform.controls['mobilenumber'].reset();
      }
      else{
        this.existmobile = '';
      }
    }
    );
  }

  isAppraiseeIdUnique(event:any){
    this.appraiseeidobj = { "appraisee_id" : this.uniqueAppraiseeId }
    this.empl.appraiseeIdValidation(this.appraiseeidobj).subscribe(res=>{
      this.emailData = res;
    console.log(this.emailData);
    this.appraiseeidexist = false;
    },
    (error) => {

      //this.notification.showError("Mobile Number Already Exist",'Error');

      if (this.appraiseeidexist = true){
      this.existappraiseeid = this.myform.value.employeeId;

      this.myform.controls['employeeId'].reset();
      }
      else{
        this.existappraiseeid = '';
      }
    }
    );
  }


}



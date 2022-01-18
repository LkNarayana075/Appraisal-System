import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { NotificationsService } from '../../services/-notifications.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  name:any;
  // employeeDetails: any | null;
  id: any;
  designation: any;
  department: any;
  manager: any;
  submitted = false;
  registerForm: FormGroup;
  singleemployee: any;
  scheduledDateResult: any;
  discussion: FormGroup;
  creatediscussion: any;
  employeeservice: any;
  resultdata: any;
  designation_name: any | null;
 

  constructor(private data:SampleformdataservicesService,
    private formBuilder : FormBuilder,
    private notification: NotificationsService) { }

  ngOnInit(): void {
    
    this.id= localStorage.getItem('appraisee_id')
    this.name = localStorage.getItem("name")
    this.designation_name = localStorage.getItem('designation')
    this.department = localStorage.getItem('department')
    this.manager = localStorage.getItem('Assigned')

    this.discussion = this.formBuilder.group({
      needdiscusstion: new FormControl(
        null,
        Validators.compose([
          Validators.required,        
        ])
      )
    })
 }

 raiseDiscussion(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.discussion.invalid) {
      return;
  }

  var payload = {
    "discussion_description":this.discussion.value.needdiscusstion
  }
  


      this.data.postRaiseDiscussion(payload).subscribe(res=>
    {  
      console.log(res)
      this.notification.showSuccess(res.Message, 'Success');
      // alert("Employee Discussion Raised");
      this.discussion.reset();

    },
    (error) => {
      console.log(error)
      console.log(error.status)
      if(error.status==403){
        this.notification.showError(error.error.detail, 'Error');
      }else{
      this.notification.showError('Something Went Wrong', 'Error');
      }
    });

  
}



}
 
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@Component({
  selector: 'app-apprisal-discussion',
  templateUrl: './apprisal-discussion.component.html',
  styleUrls: ['./apprisal-discussion.component.css']
})
export class ApprisalDiscussionComponent implements OnInit {

  dis_data : any;
  singleemployee : any;
  manager_objectives:any;
  appraisee_objectives:any;
  setScheduleDate:any;
  minDate: any;
  registerForm: FormGroup;
  submitted = false;
  scheduledDateResult: any;
  constructor(
    private data:SampleformdataservicesService,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.disablePastDate()
    this.data.getdiscussionlist().subscribe(data=>{
      this.dis_data = data;
    
      console.log(this.dis_data);
    }); 
    this.registerForm = this.formBuilder.group({

      sd: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
  });

  }

  disablePastDate(){
    var date:any = new Date();
    var todayDate:any = date.getDate();
    var month:any = date.getMonth() + 1;
    var year:any = date.getFullYear();
    if(todayDate < 10){
      todayDate = '0' + todayDate;
    }
    if(month < 10){
      month = '0' + month;
    }
    this.minDate = year + "-" + month + "-" + todayDate;
  }
  employeedetails(empdata:any){
    console.log(empdata);
    this.data.getemployeedetails(empdata).subscribe(data=>{
      this.singleemployee = data;
    console.log(this.singleemployee);
    this.manager_objectives = []
    this.appraisee_objectives = []
    for(var val of this.singleemployee.objectives_details) {
      if (val.type == "manager") 
      {
        this.manager_objectives.push(val);
      } 
      else
      {
        this.appraisee_objectives.push(val); 
      }
    }
    });
  }
  counter(i: number){
    return Array(i); 
  }
  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        console.log(this.registerForm.value,this.singleemployee.dispute.dispute_id)
        var payload = {
          "dispute_id":this.singleemployee.dispute.dispute_id,
          "scheduled_date":this.registerForm.value.sd
        }
        console.log(this.registerForm.value)
        console.log(payload)

        this.setDate(payload);
        this.registerForm.controls["sd"].reset();
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
    setDate(payload:any){
      this.data.setScheduleDate(payload).subscribe(res =>{
      this.scheduledDateResult=res;
      console.log(this.scheduledDateResult);
      })
    }
 
}

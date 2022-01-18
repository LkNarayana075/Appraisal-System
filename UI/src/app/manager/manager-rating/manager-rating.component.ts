import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'src/app/services/-notifications.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash';
@Component({
  selector: 'app-manager-rating',
  templateUrl: './manager-rating.component.html',
  styleUrls: ['./manager-rating.component.css']
})
export class ManagerRatingComponent implements OnInit {
  employeeId:number= +this.route.snapshot.params['id'];
  singleemployee: any;
  details: any;
  data: any = [];
  ManagerRating: FormGroup;
  payload: any = {};
  public employeedetailslist=[] as any;
  appraisee_objectives: any;
  manager_objectives: any;
  objectiveid: any;
  managerrating: any;
  managerrate: any;
  mngrRating: any;


  constructor(private service: SampleformdataservicesService,
    private route: ActivatedRoute,
    private notification:NotificationsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeedetails(this.employeeId);
    // this.ManagerRating = this.fb.group({
    //   Notes: new FormControl(
    //     "",
    //     Validators.compose([Validators.required, Validators.maxLength(500)])
    //   ),
    // });
    this.ManagerRating = this.fb.group({
      Notes: this.fb.array([{}])
    });
  }

  employeedetails(empdata:any){
    console.log(empdata);
    this.service.getemployeedetails(empdata).subscribe((data:any)=>{
      this.singleemployee = data;
      console.log(this.singleemployee)
      this.mngrRating = this.singleemployee.total_manager_rating;
      console.log(this.mngrRating)
      
      this.employeedetailslist=data.appraisee;
      // this.appraisee_objectives = []
      this.manager_objectives = []
      this.appraisee_objectives = []
      // for(var val of this.singleemployee.objectives_details)
      // {
      //   if (val.type == 'manager')
      //   {
      //     this.manager_objectives.push(val);
      //     console.log(this.manager_objectives)
      //   }
      //   else
      //   {
      //     this.appraisee_objectives.push(val); 
      //   }
      // }

      for(var val of this.singleemployee.objectives_details) {
        if (val.type == "self") 
        {
          this.appraisee_objectives.push(val); 
          console.log(this.appraisee_objectives,'data')
        }
        else
        {
          this.manager_objectives.push(val)
        }
      }
      this.appraisee_objectives.forEach((question: { objective_name: string; }) => {
        this.ManagerRating.addControl(question.objective_name, this.fb.control(null, Validators.required));
      })
      

    console.log(this.employeedetailslist);
      
    });
  }
  counter(i: number){
    return Array(i); 
  }

  managerRating(objectiveid:any,value:any){
   
    if(!this.data.find((x: { objectiveid: any; }) => x.objectiveid === objectiveid)){
      this.data.push({ 'objectiveid': objectiveid, 'rating': value,'notes': ''  });
      }else{
        this.update(value,objectiveid);
      }
      var element = <HTMLInputElement>document.getElementById(this.data);
    element.className += "noteactive";
  }
  update(val:any,dataid: any) {
    this.data.find((item: { objectiveid: any; }) => item.objectiveid == dataid).rating = val;
    console.log(this.data);
  }
  updateNote(e: any, objid: any) {

    this.data.find((item: { objectiveid: any; }) => item.objectiveid == objid).notes = e.target.value;

  }
  onSubmit() {  
    this.payload={
      "rating": this.data ,"appraiseeid":this.employeeId
     }
     console.log(this.payload);
     this.manager(this.payload);
    // this.managerRating.reset();

   }
  manager(payload:any){
    this.service.postManagerRating(payload).subscribe(res =>{
    this.managerrate=res;
    this.notification.showSuccess(res.Message, 'Success');
    console.log(this.managerrate);
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

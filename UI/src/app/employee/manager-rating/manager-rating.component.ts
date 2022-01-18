import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { NotificationsService } from '../../services/-notifications.service';
import { Router, NavigationEnd } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-manager-rating',
  templateUrl: './manager-rating.component.html',
  styleUrls: ['./manager-rating.component.css'],
})
export class ManagerRatingComponent implements OnInit {
  id: any;
  name: any;
  designation: any;
  department: any;
  manager: any;
  empRating: boolean = false;
  mgrRating: boolean = false;
  existRating : boolean = true;
  employeesrating: FormGroup;
  createRating: FormGroup;
  showNote: boolean = false;
  managerDisplay:boolean=false;
  ratingscale: number;
  public employeedetailslist = [] as any;
  rateBindList: number[];
  ratingList: number[] = [1, 2, 3, 4, 5];
  ratingNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public employeerating: any;
  public managerrating: any;
  public objectives = [] as any;
  public rating = [] as any;
  employee: string | null;
  id1: any;
  objective_id: any;
  orders: any = [];
  payload: any = {};
  data: any = [];
  selfrate: any;
  singleEmployee: any;
  managerList=[] as any;
  manager_objectives: any;
  appraisee_objectives : any;
  total_mngr_rating: boolean = false;
  route: any;
  constructor(private service: SampleformdataservicesService,
    private notification: NotificationsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    let getCheckedRadio = null;

    this.createRating = this.fb.group({
      Notes: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(500)])
      ),

    });
    //  this.orders = this.fb.group({});
    

    this.createRating = this.fb.group({
      orders: this.fb.array([{}])
    });

    this.id = localStorage.getItem('appraisee_id')
    this.name = localStorage.getItem("name")
    this.designation = localStorage.getItem('designation')
    this.department = localStorage.getItem('department')
    this.manager = localStorage.getItem('Assigned')
    this.id1 = localStorage.getItem("num")
    this.employeedetails(this.id1);
    // this.getOrders();
    console.log(this.manager_objectives)

    

  }

  // [{"objective_id":1,"rating":4},{"objective_id":2,"rating":5}]
  getOrders() {
    if(this.ratingscale == 10)
    {
     
    return [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
      { id: 6, value: 6 },
      { id: 7, value: 7 },
      { id: 8, value: 8 },
      { id: 9, value: 9 },
      { id: 10, value: 10 }
    ];
    }
    else if(this.ratingscale  == 5)
    {
      return [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 }
      
      ];  
    }
    else
    {
      return [

      ];  
    }
  }
  
  onSubmit() {
   this.payload={
    "rating": this.data 
   }
   
   this.selfRating(this.payload);
   console.log(this.payload);

  }



  employeedetails(empid: any) 
  {

    this.service.getemployeedetails(empid).subscribe
      ((data: any) => {
        this.singleEmployee = data;
        console.log(this.singleEmployee)

        console.log(this.singleEmployee.objectives_details)
        this.employeedetailslist = data.appraisee;
        this.employeerating = data.total_appraisee_rating;
        this.managerrating = data.total_manager_rating;
        console.log('msnsger', this.managerrating)
        if (this.managerrating != null){
          this.total_mngr_rating = true;
        }
        this.objectives = data.objectives;
        this.ratingscale = data.appraisee.rating_scale;


        this.managerList = data.objectives;
        if(this.managerList == null)
      {
        this.managerDisplay = false;
      }
     else
     {
      this.managerDisplay = true;
     }
     console.log(this.managerList);
        this.orders = this.getOrders();
        console.log(typeof this.ratingscale)

        this.objective_id = data.objectives.appraisee_objective_id
        this.objectives.forEach((question: { appraisee_objective_id: string; }) => {
          this.createRating.addControl(question.appraisee_objective_id, this.fb.control(null, Validators.required));
        })
        if (this.employeerating == 0)
          this.empRating = false;
        else
          this.empRating = true;
        if (this.managerrating == 0)
          this.mgrRating = false;
        else
          this.mgrRating = true;
        setTimeout(() => {
          if (data.ratingscale == 5) {
            this.rateBindList = this.ratingList;
          }
          else {
            this.rateBindList = this.ratingNumbers;
          }
        }, 500);
      this.manager_objectives = []
      this.appraisee_objectives = []
      for(var val of this.singleEmployee.objectives_details)
      {
        if (val.type == 'manager')
        {
          this.manager_objectives.push(val);
          console.log(this.manager_objectives)
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

  showNotes(val: any, object: number) {
    for (let i = 0; i < this.objectives.length; i++) {
      if (object == this.objectives[i].appraisal_objective_id) {
        console.log(this.objectives[i].appraisal_objective_id);
        this.showNote = true;
        break;
      }
      else
        this.showNote = false;

    }
  }
  opennotes(e: any, data: any) {
    if(!this.data.find((x: { objectiveid: any; }) => x.objectiveid === data)){
      this.data.push({ 'objectiveid': data, 'rating': e, 'notes': '' });
      }else{
        this.update(e,data);
      }
    var element = <HTMLInputElement>document.getElementById(data);
    element.className += " noteactive";
  }
  updateNote(e: any, objid: any) {

    this.data.find((item: { objectiveid: any; }) => item.objectiveid == objid).notes = e.target.value;

  }
  update(val:any,dataid: any) {
    this.data.find((item: { objectiveid: any; }) => item.objectiveid == dataid).rating = val;
    console.log(this.data);
  }

  selfRating(payload:any){
    this.service.postSelfRating(payload).subscribe(res =>{
    this.selfrate=res;
    this.notification.showSuccess(res.Message, 'Success');
    console.log(this.selfrate);
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
  needDiscussion(){
    this.route.navigate(["../../employee/employee-details"]);
  }

}
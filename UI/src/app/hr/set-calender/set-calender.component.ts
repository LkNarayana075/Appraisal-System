import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
}from '@angular/forms';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import {SetCalender} from 'src/app/models/setcalendar'
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { NotificationsService } from '../../services/-notifications.service';
@Component({
  selector: 'app-set-calender',
  templateUrl: './set-calender.component.html',
  styleUrls: ['./set-calender.component.css'],
})
export class SetCalenderComponent implements OnInit {
  formex: FormGroup;
  cardvalue: any;
  public setcalenderobj: SetCalender;
  oneyearqualification: boolean;
  sixmonqualification:boolean;
  threemonqualification:boolean;
  formvalues: any;
  reviewdate: any;
  reviewdate2: any;
  normalization: any;
  normalization2: any;
  closeddate: any;
  closeddata2: any;
  reviewdatavalue: any;
  closedapprisalvalue: any;
  normalizationdatavalue: any;
  minDate = new Date();
  model: any;
  Objective1: any;
  appraistartdate: any;
  object: any;
  resultdata: any;
  apprisalterm: any;
  reviewdate3: string;
  apiYear: number;
  selected: boolean;
  service: any;
  constructor( 
     private fb: FormBuilder,
     private cal: SampleformdataservicesService,
     private notification: NotificationsService
     ) {
this.setcalenderobj =  new SetCalender();
     }



  ngOnInit(): void {
    this.formex = this.fb.group({
     //form validations
   
      oneyear: new FormControl(
        null,
        Validators.compose([
          Validators.required,
        
        ])
      ),
     
     
      halfyear: new FormControl(
        null,
        Validators.compose([
          Validators.required,
         
        ])
      ),
      

      //objective validations
      Objective: new FormControl(
        null,
        Validators.compose([
          Validators.required,
        
        ])
      ),
     
      //stratdate validations
   
    startdate: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        
      ])
    ),
    

    //appraisal review validations

    reviews: new FormControl(
      null,
      Validators.compose([
        Validators.required,
       
      ])
    ),
   

    // normailization validation
 
    normalization: new FormControl(
      null,
      Validators.compose([
        Validators.required,
       
      ])
    ),
    

    // closed validation
    
    closed: new FormControl(
      null,
      Validators.compose([
        Validators.required,
        
      ])
    ),


   // rating validation

    rating: new FormControl(
      null,
      Validators.compose([
        Validators.required,
      
      ])
    ),
 
    });
    // this.oneyear();
    // this.sixmon();
    // this.threemon();
  }

  

  Qualification() {
    console.log(this.cardvalue);
  }
  oneyear(){
    console.log('text');
    this.oneyearqualification=true;
    this.sixmonqualification=false;
    this.threemonqualification=false;
    this.selected = !this.selected;
  }
  sixmon(){
    this.sixmonqualification=true;
    this.oneyearqualification=false;
    this.threemonqualification=false; 
    this.selected = !this.selected; 
    // this.formex.controls['close'].reset();

}
threemon(){
  this.threemonqualification=true;
  this.oneyearqualification=false;
  this.sixmonqualification=false;
  this.selected = !this.selected;
  
}

reviewsdata(event: any){
  this.formvalues = this.formex.value;
  this.reviewdate2 = this.formvalues.startdate;
  this.reviewdate3=this.formvalues.reviews;
  var eventdate =  new Date(this.reviewdate2);
  //const options = { dateStyle: 'short' };
  //var futureDate =  eventdate.toLocaleDateString("");
  
  
  //var datestring = "12-10-2021";
  
  if(this.reviewdate3=='1' )
  var newdate = eventdate.setDate(eventdate.getDate() + 7);
  else if(this.reviewdate3=='2')
  var newdate = eventdate.setDate(eventdate.getDate() + 14);
  else if(this.reviewdate3=='3')
  var newdate = eventdate.setDate(eventdate.getDate() + 21);
  else
  var newdate = eventdate.setDate(eventdate.getDate() + 0);
  // var newdate = eventdate.setDate(eventdate.getDate() + 14);
  var futureDate =  new Date(newdate);
  var futureDate2 =  futureDate.toLocaleDateString("en-CA");
  this.reviewdatavalue=futureDate2;
  console.log('reviewdate', futureDate2);
}
normalizationdata(event: any){
 this.normalization = this.reviewdatavalue;
 this.formvalues = this.formex.value;
 this.reviewdate3=this.formvalues.normalization;
// this.normalization = this.reviewdatavalue.split('-').reverse().join();
 var date = new Date(this.normalization);
//  var newdate2 = date.setDate(date.getDate() + 14);
 if(this.reviewdate3=='1' )
 var newdate = date.setDate(date.getDate() + 7);
 else if(this.reviewdate3=='2')
 var newdate = date.setDate(date.getDate() + 14);
 else if(this.reviewdate3=='3')
 var newdate = date.setDate(date.getDate() + 21);
 else
 var newdate = date.setDate(date.getDate() + 0);
 var upDate = new Date(newdate);
 var upDate1 =  upDate.toLocaleDateString("en-CA");
 this.normalizationdatavalue= upDate1;
console.log('normalizationdata', upDate1 );
}
closeddata(event: any){
    this.closeddate =  this.normalizationdatavalue;
    this.formvalues = this.formex.value;
    this.reviewdate3=this.formvalues.closed
    var date = new Date(this.closeddate);
    // var newdate2 = date.setDate(date.getDate() + 14);
    if(this.reviewdate3=="1")
    var newdate2 = date.setDate(date.getDate() + 7);
    else if(this.reviewdate3=="2")
    var newdate2 = date.setDate(date.getDate() + 14);
    else if(this.reviewdate3=="3")
    var newdate2 = date.setDate(date.getDate() + 21);
    else
    var newdate2 = date.setDate(date.getDate() + 0);
    var upDate = new Date(newdate2);
    var upDate1 =  upDate.toLocaleDateString("en-CA");
    this.closedapprisalvalue = upDate1;
    console.log('closeddata', upDate1 );
   }
  
   Objectivedatavalue() {
    console.log('hitobjective')
    this.formvalues = this.formex.value;
    this.Objective1 = this.formvalues.Objective;
    this.apprisalterm = this.formvalues.oneyear;
    console.log(this.apprisalterm)
    this.formex.controls['startdate'].reset();
    this.minDate=new Date();
    if (this.apprisalterm == '1' )
    {
      this.minDate.setDate(this.Objective1.getDate());
      this.minDate.setDate(this.minDate.getDate() + 320);
      
    }
    else if(this.apprisalterm == '6' )
    {
      this.minDate.setDate(this.Objective1.getDate());
      this.minDate.setDate(this.minDate.getDate() + 140); 
      
    } 
    else if(this.apprisalterm == '3')
    {
      this.minDate.setDate(this.Objective1.getDate());
      this.minDate.setDate(this.minDate.getDate() + 40); 
    }
    else
    {

    }

   }
   prepairedobject()
   {
    const formvalues = this.formex.value;
    var startdate = new DatePipe("en-US").transform(formvalues.startdate, 'yyyy-MM-dd');
    var Objective = new DatePipe("en-US").transform(formvalues.Objective, 'yyyy-MM-dd');
    // console.log(this.startdate)
    // const formvalues = this.formex.value; 
    this.setcalenderobj.appraisal_term = formvalues.oneyear;
    this.setcalenderobj.appraisal_start_date = startdate;
    this.setcalenderobj.objective_set_date = Objective;
    this.setcalenderobj.self_appraisal_end_date = this.reviewdatavalue;
    this.setcalenderobj.review_end_date = this.normalizationdatavalue;
    this.setcalenderobj.closer_date = this.closedapprisalvalue;
    this.setcalenderobj.rating_scale = formvalues.rating;
    this.setcalenderobj.qualification_criteria = formvalues.halfyear;
    
  }
onsubmit()
{
  this.prepairedobject();
  console.log(this.setcalenderobj);
  this.cal.createNewCalendar(this.setcalenderobj).subscribe( data=> {
    this.resultdata = data;
    console.log('finalrespone', this.resultdata);
    this.notification.showSuccess(data.Message, 'Success');
    this.formex.reset();
    this.formex.patchValue({
      closed: '', reviews:'', normalization:'', rating:''
    });
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
reset()
{
  this.formex.reset();
  this.formex.patchValue({
    closed: '', reviews:'', normalization:'', rating:''
  });
  // this.formex.patchValue({
  //   reviews: ''
  // });
  // this.formex.patchValue({
  //   normalization: ''
  // });
  // this.formex.patchValue({
  //   rating: ''
  // });
}

}

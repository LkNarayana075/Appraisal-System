import { Component, OnInit,ViewChildren, QueryList, ElementRef } from '@angular/core';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';
import { NotificationsService } from '../../services/-notifications.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from '@angular/forms';

import * as _ from 'lodash';
@Component({
  selector: 'app-assign-objective',
  templateUrl: './assign-objective.component.html',
  styleUrls: ['./assign-objective.component.css'],
})
export class AssignObjectiveComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  @ViewChildren("checkboxesEmp") checkboxesEmp: QueryList<ElementRef>;
  details: any;
  assignForm: FormGroup;
  result: any;
  employeeNames: any = [];
  departmentlist: any;
  unquiedepartment: any;
  unquiedesignation: any;
  managertoken: void;
  item: any;
  selectedValue: any;
  list: any;
  availVal: any;
  lengths = 10;
  total = 0;
  butDisabled = [false];
  nrSelect = 'Weightage';
  employeeNameslist: any;
  employeeobj: any = [];
  objectNames: any;
  objectlist: any;
  data: any
  weightagesArray: any = [];
  isWeightageExceeded = false;
  re: number;
  selectedoption: number;
  isEditable: boolean = false;
  employeId: any = [];
  objectiveArray: any = []
  constructor(private employeeservice: SampleformdataservicesService, private assign: FormBuilder,private notification:NotificationsService) {
    this.assignForm = assign.group({
      selectval: 'Weightage',
      objective_name:new FormControl(""),
      first_name:new FormControl(""),


    });
    this.assignForm = this.assign.group({
      mobile_number: this.assign.array([], this.multipleCheckboxRequireOne),
      objective_id: this.assign.array([], this.objectivemultipleCheckboxRequireOne),

    });
    this.list = [
      { id: 1, isSelected: false },
      { id: 2, isSelected: false },
      { id: 3, isSelected: false },
      { id: 4, isSelected: false },
      { id: 5, isSelected: false },
      { id: 6, isSelected: false },
      { id: 7, isSelected: false },
      { id: 8, isSelected: false },
      { id: 9, isSelected: false },
      { id: 10, isSelected: false }
    ];
  }




  ngOnInit(): void {
    this.getemployees();
    this.managerdata();
    this.objectivedata();
    this.availVal = 10;
  }
  multipleCheckboxRequireOne(fa: any) {
    let valid = false;
    
    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        break;
      }
    }
    return valid ? null : {
      multipleCheckboxRequireOne: true
    };
  }
  objectivemultipleCheckboxRequireOne(fa: any) {
    let valid = false;
    
    for (let x = 0; x < fa.length; ++x) {
      if (fa.at(x).value) {
        valid = true;
        break;
      }
    }
    return valid ? null : {
      multipleCheckboxRequireOne: true
    };
  }
  onChange(selectedValue: any, index: any, objectiveid: any) {
    
    for (let i = 0; i < this.objectiveArray.length; i++) {
      if (this.objectiveArray[i].objective_id == objectiveid) {
        
        this.objectiveArray[i].weightage = parseInt(selectedValue);
      }
    }
    console.log(this.objectiveArray);
    this.selectedoption = index;
    this.butDisabled[index] = true;
    if (this.total == 0) {
      this.total = this.total + parseInt(selectedValue);


    } else {
      this.total = this.total + parseInt(selectedValue);
      if (this.total == 10) {
        this.butDisabled[index] = true;
      }
    }
    if (selectedValue < 10) {
      var select = parseInt(selectedValue);
      this.availVal = 10 - this.total;
    } else if (selectedValue == 10) {
      var select = parseInt(selectedValue);
      this.isEditable = true;
      this.butDisabled = [true];
      this.availVal = 10 - select;
      console.log(this.availVal, 'availVal');
    } else {
      this.availVal = selectedValue;
      console.log();
    }


  }
  onCheckobj(e: any,objective_id:any) {
    const emailFormArray = <FormArray>this.assignForm.controls.objective_id;
    
    if (e.target.checked) {
      emailFormArray.push(new FormControl(objective_id));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == objective_id)
      emailFormArray.removeAt(index);
    }
    if (e.target.checked) {
      this.objectiveArray.push({ 'objective_id': e.target.value, 'weightage': 0 });
      console.log(this.objectiveArray);
    }

    else {
      this.objectiveArray = _.filter(this.objectiveArray, function (currentObject) {
        return currentObject.objective_id !== e.target.value;
      });

    }
  }
  onCheckboxChange(e: any,mobile_number:any) {
    const emailFormArray = <FormArray>this.assignForm.controls.mobile_number;
    
    if (e.target.checked) {
      emailFormArray.push(new FormControl(mobile_number));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == mobile_number)
      emailFormArray.removeAt(index);
    }

    if (e.target.checked) {
      this.employeId.push(parseInt(e.target.value));
      console.log(this.employeId);
    } else {
      var value=parseInt(e.target.value);
      _.remove(this.employeId, function(e) {
        return e === value;
      });
      console.log(this.employeId);
    }
  }
  reset() {
    this.total = 0;
    this.availVal = 10;
    this.assignForm.reset();
    this.employeId=[];
    this.objectiveArray=[];
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
     this.checkboxesEmp.forEach((element) => {
      element.nativeElement.checked = false;
    });
    console.log(this.employeId);
    this.butDisabled = [false];
    this.list = [
      { id: 1, isSelected: false },
      { id: 2, isSelected: false },
      { id: 3, isSelected: false },
      { id: 4, isSelected: false },
      { id: 5, isSelected: false },
      { id: 6, isSelected: false },
      { id: 7, isSelected: false },
      { id: 8, isSelected: false },
      { id: 9, isSelected: false },
      { id: 10, isSelected: false }
    ];


  }
  objectivedata() {
    this.employeeservice.getobjectivelist(this.details).subscribe(data => {
      this.details = data;
      console.log(data)
    });
  }
  managerdata() {
    //this.managertoken = localStorage.removeItem('SeesionUser');
    this.employeeservice.managertoken().subscribe(
      (res) => {
        this.result = res;
      },
      (error) => {
        console.log('error');
      }
    );
  }
  departmentObj: any = [];
  getemployees() {
    this.employeeservice.getemployees().subscribe(
      (res: any) => {
        this.result = res;
        console.log(this.result);

        for (const designation of this.result) {
          this.employeeNames.push(designation.Appraisee);
          this.employeeobj.push(designation.Appraisee);
        }
console.log('obj', this.employeeobj);
        this.unquiedepartment = _.uniqBy(
          _.flatMap(this.employeeobj, 'department'),
          'department_id'
        ),
          console.log(this.unquiedepartment)
        this.unquiedesignation = _.uniqBy(
          _.flatMap(this.employeeobj, 'designation'),
          'designation_id');
        console.log('desi', this.unquiedesignation);

        console.log(
          'loaddashdata',
          // _.find(this.result, ['department_id', '1'])

          this.departmentlist
        );
        console.log('employeedata', this.result);
        console.log('employeedata', this.result.department);
      },
      () => {
        console.log('error');
      }
    );
  }

  onSelectDesignation(event: any) {
    const triggeredDesignation = event.target.innerText;

    this.employeeNames = _.filter(this.employeeobj, function (item) {
      return (
        item.designation.designation_name === triggeredDesignation
      );
    })
    console.log('desigination', this.employeeNames);

  }
  onSelectDepartment(event: any) {
    const triggeredDepartment = event.target.innerText;


    this.employeeNames = _.filter(this.employeeobj, function (item) {
      return (
        item.department.department_name === triggeredDepartment
      );
    });
  }
  onSubmit() {
    var payload = {
      "employees": this.employeId,
      "objectives": this.objectiveArray
  }
  if(this.employeId.length >0 && this.objectiveArray.length>0){
    console.log(payload);
    this.employeeservice.pythonassignobjectives(payload).subscribe(data => {
      this.notification.showSuccess(data.Message, 'Success');
      this.reset();
    },
    (error) => {
      if(error.status==403){
     
      this.notification.showError(error.error.detail, 'Error');
      this.reset();
      }
    });
    
  } else{
    
      
      this.notification.showError('please select all value', 'Error');
      }
    
    }
  }


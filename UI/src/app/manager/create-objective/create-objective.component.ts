import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';

@Component({
  selector: 'app-create-objective',
  templateUrl: './create-objective.component.html',
  styleUrls: ['./create-objective.component.css'],
})
export class CreateObjectiveComponent implements OnInit {
  createobjective: FormGroup;
  objective : any;
  creteobjdata:  any;
  objectiveName: boolean;
  objectiveDescription: boolean;
  constructor(private fb: FormBuilder,
    private data:SampleformdataservicesService) {}

  ngOnInit(): void {
    this.createobjective = this.fb.group({
      objective_name: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[^-\s][a-zA-Z0-9 ]*$/),
        ])
      ),
      objective_description: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.maxLength(500)])
      ),
    });

  }

  createObjective(payload:any){
    this.data.postObjective(payload).subscribe(res =>{
    this.objective=res;
    console.log(this.objective);
    });
  }
  onSubmit() {
    const objectiveName = this.createobjective.controls.objective_name.value;
    const objectiveDescription = this.createobjective.controls.objective_description.value;
    this.creteobjdata = {
      objective_name:objectiveName,
      objective_description: objectiveDescription};

    this.data.postObjective(JSON.stringify(this.creteobjdata)).subscribe(res=>{
        console.log(res);
        alert("objectives created succesfully")
        this.createobjective.reset()
    });
  }
}

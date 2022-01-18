import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { objectives ,deleteobjective} from 'src/app/models/login';
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  createObjective:FormGroup;
  [x: string]: any;
  objectivelist: any;
  //rowData: any;
  modeldata : any;
  objectiveobj:objectives;
  objective_id:any;
  deletemodel:any;

  constructor(private employeeService:SampleformdataservicesService) { this.objectiveobj=new objectives()}

  ngOnInit(): void {
    this.getAllObjectives();
    this.createObjective = new FormGroup({
      objective_name: new FormControl(''),
      objective_description: new FormControl('  ')
    })
  }
  onEditObjective(objective: any) {

    this.modeldata = this.objectivelist[objective];
    this.createObjective.patchValue({
      objective_name: this.modeldata.objective_name,
      objective_description: this.modeldata.objective_description,
      //  objective_id : this.modeldata.objective_id
    });
  }
  ondelete(objective:any){
   this.deletemodel = this.objectivelist[objective];
  }

  deleteobjective(){
    this.employeeService.deleteobj(this.deletemodel.objective_id).subscribe(res =>{
      console.log(res)
      let ref= document.getElementById("cancelbutton");
      ref?.click();
      this.getAllObjectives();
    })
  }


  getAllObjectives(){
    this.employeeService.getObjectives().subscribe(res =>{
      this.objectivelist=res;
      console.log(this.objectivelist);
      })
  }
  onUpdateObjective(){
    this.objectiveobj.objective_name = this.createObjective.value.objective_name;
    this.objectiveobj.objective_description = this.createObjective.value.objective_description;
    this.objectiveobj.objective_id=this.modeldata.objective_id;


    console.log(this.objectiveobj.objective_name, this.objectiveobj.objective_description);
    this.employeeService.updateobj(this.objectiveobj).subscribe(res =>{
     // this.updatelist=res;
      console.log(res);   
      let ref = document.getElementById('cancel');
      ref?.click();
      this.getAllObjectives();
    })

  }
}

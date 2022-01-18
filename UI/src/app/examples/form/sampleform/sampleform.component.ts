import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { sampleformdata } from '../../models/sampleform';
import { SampleformdataservicesService } from '../../../services/sampleformdataservices.service';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css'],
})
export class SampleformComponent implements OnInit {
  formex: FormGroup;
  public sampledataobj: sampleformdata;
  clientdata: any;
  employeedata: unknown;
  constructor(
    private fb: FormBuilder,
    private sampledataservice: SampleformdataservicesService
  ) {
    this.sampledataobj = new sampleformdata();
  }

  ngOnInit(): void {
    //form validations
    this.formex = this.fb.group({
      fullName: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(80),
        ])
      ),
      Phone: new FormControl(null, Validators.compose([Validators.required])),
      Email: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.email])
      ),
      Subject: new FormControl(null, Validators.compose([Validators.required])),
      Requirement: new FormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  //Object creation with form datat
  preparesampleformdata() {
    const sampleformdata = this.formex.value;
    this.sampledataobj.fullName = sampleformdata.fullName;
    this.sampledataobj.Phone = sampleformdata.Phone;
    this.sampledataobj.Email = sampleformdata.Email;
    this.sampledataobj.Subject = sampleformdata.Subject;
    this.sampledataobj.Requirement = sampleformdata.Requirement;
  }
  // Submmit form with service call

  onsubmit() {
    debugger;
    this.preparesampleformdata();
    console.log(this.sampledataobj);
    this.sampledataservice.sendingsampleformdata(this.sampledataobj).subscribe(
      (res) => {
        console.log('clientDetails', res);
        this.clientdata = res;
      },
      (error) => {
        console.log('error');
      }
    );
  }
}

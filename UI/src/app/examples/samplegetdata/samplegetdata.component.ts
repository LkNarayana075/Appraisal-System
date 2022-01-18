import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from '../../services/sampleformdataservices.service';

@Component({
  selector: 'app-samplegetdata',
  templateUrl: './samplegetdata.component.html',
  styleUrls: ['./samplegetdata.component.css'],
})
export class SamplegetdataComponent implements OnInit {
  getsampledatalist: any;
  supportdata: any;
  normaltable: any;
  isLoggedIn: boolean;
  constructor(private getservice: SampleformdataservicesService) {}

  ngOnInit(): void {
    this.getsampledata();
    this.isLoggedIn = false;
  }
  getsampledata() {
    this.getservice.samplegetdata().subscribe(
      (res) => {
        this.getsampledatalist = res;
        this.supportdata = this.getsampledatalist.support;
        this.normaltable = this.getsampledatalist.data;
        console.log('supportdata', this.supportdata);
        console.log('normaltable', this.normaltable);
      },
      (error) => {
        console.log('error');
      }
    );
  }
}

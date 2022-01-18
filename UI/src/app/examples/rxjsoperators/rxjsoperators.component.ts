import { Component, OnInit } from '@angular/core';
import { SampleformdataservicesService } from '../../services/sampleformdataservices.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.css'],
})
export class RxjsoperatorsComponent implements OnInit {
  result: any;

  constructor(private exampleservice: SampleformdataservicesService) {}

  ngOnInit(): void {
    this.getemployees();
  }
  getemployees() {
    this.exampleservice
      .getmapdata()
      .pipe(
        map((res: any) => ({
          name: res.name,
          birthYear: res.birth_year,
        }))
      )
      .subscribe(
        (res) => {
          this.result = res;
          console.log(this.result);
        },
        () => {
          console.log('error');
        }
      );
  }
}

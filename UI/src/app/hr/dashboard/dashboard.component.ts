import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { SampleformdataservicesService } from 'src/app/services/sampleformdataservices.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  calendarDetails: any;
  mngrList: any;
  constructor(private data:SampleformdataservicesService) {}

  public calendarOptions = {
    events: [
      
    ],
  };

  ngOnInit(): void {
    //Rendering-Appraisal-Chart
    this.getAppraisalChart();
    console.log("dffgrf");
    this.getCalendar();
    this.getdiscussion();
    this.getMngrList();
  }

  //Implementing-Appraisal-Chart
  private getAppraisalChart(): void {
    const appraisalChart = new Chart('chart', {
      type: 'pie',
      data: {
        // labels: ['Completed', 'Pending'],
        datasets: [
          {
            label: 'Appraisal Status',
            data: [38, 18],
            backgroundColor: ['#4CBF66', '#7A7173'],
            borderColor: ['#FFFFFF', '#FFFFFF'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
      },
    });
  }
  getCalendar() { this.data.getActiveCalendar().subscribe(res =>{
    console.log(res);
    this.calendarDetails = res
    })
  }
  getdiscussion() { this.data.getdiscussionlist().subscribe(data=>{
    console.log(data);
    this.discussion_data = data;
    })
  }
  getMngrList(){
    this.data.getDashboardMngrList().subscribe(res=>{
      this.mngrList = res;
      console.log(this.mngrList)
    });
  }
  
}

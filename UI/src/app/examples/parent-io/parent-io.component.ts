import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-io',
  templateUrl: './parent-io.component.html',
  styleUrls: ['./parent-io.component.css'],
})
export class ParentIOComponent implements OnInit {
  thankYouText: any;
  constructor() {}

  ngOnInit(): void {}
  chocolate = 0;
  sendToChild() {
    this.chocolate++;
  }
  sayThanks(event: any) {
    this.thankYouText = event;
  }
}

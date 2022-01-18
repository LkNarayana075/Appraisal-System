import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css'],
})
export class LifecyclehooksComponent implements OnInit, OnChanges {
  name: string;
  @Input() chocolateCount: any;
  constructor() {}
  ngOnChanges(): void {
    console.log('chocolateCount', this.chocolateCount);
  }

  ngOnInit(): void {
    this.name = 'ngonint';
  }
}

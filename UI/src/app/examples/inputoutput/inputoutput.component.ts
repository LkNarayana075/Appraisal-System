import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css'],
})
export class InputoutputComponent implements OnInit {
  @Input() chocolateCount: any;
  @Output() thanks: EventEmitter<string> = new EventEmitter<string>();

  sayThanks(event: any) {
    this.thanks.emit('Thank you');
  }
  constructor() {}

  ngOnInit(): void {}
}

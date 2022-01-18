import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-bindingdata',
  templateUrl: './bindingdata.component.html',
  styleUrls: ['./bindingdata.component.css'],
})
export class BindingdataComponent implements OnInit {
  public inputValue: string = '';
  inputValuechange: string;

  canSave = true;
  isUnchanged = true;
  num: number = 0;
  isSpecial: boolean;
  isactive: boolean = true;
  currentStyles: { 'font-style': string; 'font-weight': string };
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.clicktext');
    this.renderer.setStyle(part, 'color', '#ccc');
  }
  ngOnInit(): void {
    this.isSpecial = true;
    this.setCurrentStyles();
  }
  swichchanevalue(value: string) {
    console.log(value);
  }
  showhide() {
    this.isactive = !this.isactive;
    console.log(this.isactive);
  }
  setUppercaseName(name: string) {
    this.inputValuechange = name.toUpperCase();
  }
  changecolor() {
    this.isSpecial = false;
  }
  revertcolor() {
    this.isSpecial = true;
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
    };
  }
}

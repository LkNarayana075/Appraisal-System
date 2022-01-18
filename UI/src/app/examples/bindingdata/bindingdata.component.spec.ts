import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingdataComponent } from './bindingdata.component';

describe('BindingdataComponent', () => {
  let component: BindingdataComponent;
  let fixture: ComponentFixture<BindingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

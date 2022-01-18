import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCalenderComponent } from './set-calender.component';

describe('SetCalenderComponent', () => {
  let component: SetCalenderComponent;
  let fixture: ComponentFixture<SetCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

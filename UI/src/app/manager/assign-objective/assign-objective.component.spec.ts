import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignObjectiveComponent } from './assign-objective.component';

describe('AssignObjectiveComponent', () => {
  let component: AssignObjectiveComponent;
  let fixture: ComponentFixture<AssignObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

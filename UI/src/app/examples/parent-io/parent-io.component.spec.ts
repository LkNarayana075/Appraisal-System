import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentIOComponent } from './parent-io.component';

describe('ParentIOComponent', () => {
  let component: ParentIOComponent;
  let fixture: ComponentFixture<ParentIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentIOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

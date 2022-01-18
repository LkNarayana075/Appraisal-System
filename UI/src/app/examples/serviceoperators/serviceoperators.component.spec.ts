import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceoperatorsComponent } from './serviceoperators.component';

describe('ServiceoperatorsComponent', () => {
  let component: ServiceoperatorsComponent;
  let fixture: ComponentFixture<ServiceoperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceoperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceoperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

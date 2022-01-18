import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplegetdataComponent } from './samplegetdata.component';

describe('SamplegetdataComponent', () => {
  let component: SamplegetdataComponent;
  let fixture: ComponentFixture<SamplegetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplegetdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplegetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprisalDiscussionComponent } from './apprisal-discussion.component';

describe('ApprisalDiscussionComponent', () => {
  let component: ApprisalDiscussionComponent;
  let fixture: ComponentFixture<ApprisalDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprisalDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprisalDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

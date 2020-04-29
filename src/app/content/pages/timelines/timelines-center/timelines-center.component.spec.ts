import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesCenterComponent } from './timelines-center.component';

describe('TimelinesCenterComponent', () => {
  let component: TimelinesCenterComponent;
  let fixture: ComponentFixture<TimelinesCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinesCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesRightComponent } from './timelines-right.component';

describe('TimelinesRightComponent', () => {
  let component: TimelinesRightComponent;
  let fixture: ComponentFixture<TimelinesRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinesRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

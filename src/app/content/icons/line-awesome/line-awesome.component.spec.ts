import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAwesomeComponent } from './line-awesome.component';

describe('LineAwesomeComponent', () => {
  let component: LineAwesomeComponent;
  let fixture: ComponentFixture<LineAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

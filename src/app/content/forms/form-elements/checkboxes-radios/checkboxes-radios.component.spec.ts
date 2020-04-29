import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesRadiosComponent } from './checkboxes-radios.component';

describe('CheckboxesRadiosComponent', () => {
  let component: CheckboxesRadiosComponent;
  let fixture: ComponentFixture<CheckboxesRadiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxesRadiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesRadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

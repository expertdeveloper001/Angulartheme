import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperclassesComponent } from './helperclasses.component';

describe('HelperclassesComponent', () => {
  let component: HelperclassesComponent;
  let fixture: ComponentFixture<HelperclassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperclassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperclassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

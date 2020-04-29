import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedComponent } from './bordered.component';

describe('BorderedComponent', () => {
  let component: BorderedComponent;
  let fixture: ComponentFixture<BorderedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

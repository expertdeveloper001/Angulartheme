import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdvancedComponent } from './register-advanced.component';

describe('RegisterAdvancedComponent', () => {
  let component: RegisterAdvancedComponent;
  let fixture: ComponentFixture<RegisterAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

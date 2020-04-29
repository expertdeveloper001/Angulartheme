import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdvancedComponent } from './login-advanced.component';

describe('LoginAdvancedComponent', () => {
  let component: LoginAdvancedComponent;
  let fixture: ComponentFixture<LoginAdvancedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdvancedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

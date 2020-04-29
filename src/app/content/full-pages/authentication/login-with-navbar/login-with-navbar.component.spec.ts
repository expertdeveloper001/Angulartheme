import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithNavbarComponent } from './login-with-navbar.component';

describe('LoginWithNavbarComponent', () => {
  let component: LoginWithNavbarComponent;
  let fixture: ComponentFixture<LoginWithNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

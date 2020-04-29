import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithBgComponent } from './login-with-bg.component';

describe('LoginWithBgComponent', () => {
  let component: LoginWithBgComponent;
  let fixture: ComponentFixture<LoginWithBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

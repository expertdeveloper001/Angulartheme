import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithNavbarComponent } from './register-with-navbar.component';

describe('RegisterWithNavbarComponent', () => {
  let component: RegisterWithNavbarComponent;
  let fixture: ComponentFixture<RegisterWithNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

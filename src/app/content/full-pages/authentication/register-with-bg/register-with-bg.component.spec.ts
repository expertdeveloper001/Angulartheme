import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithBgComponent } from './register-with-bg.component';

describe('RegisterWithBgComponent', () => {
  let component: RegisterWithBgComponent;
  let fixture: ComponentFixture<RegisterWithBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

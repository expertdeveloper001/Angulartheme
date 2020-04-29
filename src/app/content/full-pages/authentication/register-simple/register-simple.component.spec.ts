import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSimpleComponent } from './register-simple.component';

describe('RegisterSimpleComponent', () => {
  let component: RegisterSimpleComponent;
  let fixture: ComponentFixture<RegisterSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

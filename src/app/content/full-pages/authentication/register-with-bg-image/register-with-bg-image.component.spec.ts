import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithBgImageComponent } from './register-with-bg-image.component';

describe('RegisterWithBgImageComponent', () => {
  let component: RegisterWithBgImageComponent;
  let fixture: ComponentFixture<RegisterWithBgImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithBgImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithBgImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

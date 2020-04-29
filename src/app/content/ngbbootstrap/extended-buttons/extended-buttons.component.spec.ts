import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedButtonsComponent } from './extended-buttons.component';

describe('ExtendedButtonsComponent', () => {
  let component: ExtendedButtonsComponent;
  let fixture: ComponentFixture<ExtendedButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecialsComponent } from './new-specials.component';

describe('NewSpecialsComponent', () => {
  let component: NewSpecialsComponent;
  let fixture: ComponentFixture<NewSpecialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpecialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

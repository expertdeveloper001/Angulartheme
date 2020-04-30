import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewSpecialsComponent } from './edit-new-specials.component';

describe('EditNewSpecialsComponent', () => {
  let component: EditNewSpecialsComponent;
  let fixture: ComponentFixture<EditNewSpecialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewSpecialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewArrivalsComponent } from './edit-new-arrivals.component';

describe('EditNewArrivalsComponent', () => {
  let component: EditNewArrivalsComponent;
  let fixture: ComponentFixture<EditNewArrivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewArrivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewArrivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

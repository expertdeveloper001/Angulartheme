import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageImageSequenceComponent } from './manage-image-sequence.component';

describe('ManageImageSequenceComponent', () => {
  let component: ManageImageSequenceComponent;
  let fixture: ComponentFixture<ManageImageSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageImageSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageImageSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

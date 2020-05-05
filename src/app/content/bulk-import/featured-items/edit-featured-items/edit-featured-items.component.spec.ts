import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeaturedItemsComponent } from './edit-featured-items.component';

describe('EditFeaturedItemsComponent', () => {
  let component: EditFeaturedItemsComponent;
  let fixture: ComponentFixture<EditFeaturedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeaturedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeaturedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

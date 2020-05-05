import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeaturedBrandsComponent } from './edit-featured-brands.component';

describe('EditFeaturedBrandsComponent', () => {
  let component: EditFeaturedBrandsComponent;
  let fixture: ComponentFixture<EditFeaturedBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeaturedBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeaturedBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalsImagesSequenceComponent } from './arrivals-images-sequence.component';

describe('ArrivalsImagesSequenceComponent', () => {
  let component: ArrivalsImagesSequenceComponent;
  let fixture: ComponentFixture<ArrivalsImagesSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalsImagesSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalsImagesSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

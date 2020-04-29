import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaobjectsComponent } from './mediaobjects.component';

describe('MediaobjectsComponent', () => {
  let component: MediaobjectsComponent;
  let fixture: ComponentFixture<MediaobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

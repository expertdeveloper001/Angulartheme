import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextutilitiesComponent } from './textutilities.component';

describe('TextutilitiesComponent', () => {
  let component: TextutilitiesComponent;
  let fixture: ComponentFixture<TextutilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextutilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextutilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

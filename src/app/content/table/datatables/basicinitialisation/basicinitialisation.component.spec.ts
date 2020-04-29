import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinitialisationComponent } from './basicinitialisation.component';

describe('BasicinitialisationComponent', () => {
  let component: BasicinitialisationComponent;
  let fixture: ComponentFixture<BasicinitialisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicinitialisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinitialisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutNavbarComponent } from './full-layout-navbar.component';

describe('FullLayoutNavbarComponent', () => {
  let component: FullLayoutNavbarComponent;
  let fixture: ComponentFixture<FullLayoutNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedRowsComponent } from './striped-rows.component';

describe('StripedRowsComponent', () => {
  let component: StripedRowsComponent;
  let fixture: ComponentFixture<StripedRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripedRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripedRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

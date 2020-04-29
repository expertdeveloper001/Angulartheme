import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSeparatorComponent } from './row-separator.component';

describe('RowSeparatorComponent', () => {
  let component: RowSeparatorComponent;
  let fixture: ComponentFixture<RowSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

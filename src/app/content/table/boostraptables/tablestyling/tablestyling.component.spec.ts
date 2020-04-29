import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablestylingComponent } from './tablestyling.component';

describe('TablestylingComponent', () => {
  let component: TablestylingComponent;
  let fixture: ComponentFixture<TablestylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablestylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablestylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

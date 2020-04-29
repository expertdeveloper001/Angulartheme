import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableborderComponent } from './tableborder.component';

describe('TableborderComponent', () => {
  let component: TableborderComponent;
  let fixture: ComponentFixture<TableborderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableborderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableborderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

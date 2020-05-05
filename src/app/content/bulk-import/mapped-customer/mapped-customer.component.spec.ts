import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappedCustomerComponent } from './mapped-customer.component';

describe('MappedCustomerComponent', () => {
  let component: MappedCustomerComponent;
  let fixture: ComponentFixture<MappedCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappedCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticChatComponent } from './static-chat.component';

describe('StaticChatComponent', () => {
  let component: StaticChatComponent;
  let fixture: ComponentFixture<StaticChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

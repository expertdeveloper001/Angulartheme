import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntexhighlighterComponent } from './syntexhighlighter.component';

describe('SyntexhighlighterComponent', () => {
  let component: SyntexhighlighterComponent;
  let fixture: ComponentFixture<SyntexhighlighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyntexhighlighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyntexhighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

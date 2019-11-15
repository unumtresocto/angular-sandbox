import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarPlaygroundComponent } from './scrollbar-playground.component';

describe('ScrollbarPlaygroundComponent', () => {
  let component: ScrollbarPlaygroundComponent;
  let fixture: ComponentFixture<ScrollbarPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollbarPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollbarPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

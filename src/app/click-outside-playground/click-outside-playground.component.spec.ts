import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickOutsidePlaygroundComponent } from './click-outside-playground.component';

describe('ClickOutsidePlaygroundComponent', () => {
  let component: ClickOutsidePlaygroundComponent;
  let fixture: ComponentFixture<ClickOutsidePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickOutsidePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickOutsidePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

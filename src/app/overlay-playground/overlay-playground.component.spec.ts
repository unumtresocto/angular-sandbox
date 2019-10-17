import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPlaygroundComponent } from './overlay-playground.component';

describe('OverlayPlaygroundComponent', () => {
  let component: OverlayPlaygroundComponent;
  let fixture: ComponentFixture<OverlayPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

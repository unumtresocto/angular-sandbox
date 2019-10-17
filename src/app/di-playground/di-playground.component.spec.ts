import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiPlaygroundComponent } from './di-playground.component';

describe('DiPlaygroundComponent', () => {
  let component: DiPlaygroundComponent;
  let fixture: ComponentFixture<DiPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

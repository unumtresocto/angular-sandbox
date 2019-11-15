import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProjectorComponent } from './box-projector.component';

describe('BoxProjectorComponent', () => {
  let component: BoxProjectorComponent;
  let fixture: ComponentFixture<BoxProjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxProjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxProjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

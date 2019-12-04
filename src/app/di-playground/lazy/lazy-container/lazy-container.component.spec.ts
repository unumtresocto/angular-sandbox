import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyContainerComponent } from './lazy-container.component';

describe('LazyContainerComponent', () => {
  let component: LazyContainerComponent;
  let fixture: ComponentFixture<LazyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

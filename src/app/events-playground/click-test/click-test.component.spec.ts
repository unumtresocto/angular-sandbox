import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickTestComponent } from './click-test.component';

describe('ClickTestComponent', () => {
  let component: ClickTestComponent;
  let fixture: ComponentFixture<ClickTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

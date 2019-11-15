import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPlaygroundComponent } from './events-playground.component';

describe('EventsPlaygroundComponent', () => {
  let component: EventsPlaygroundComponent;
  let fixture: ComponentFixture<EventsPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

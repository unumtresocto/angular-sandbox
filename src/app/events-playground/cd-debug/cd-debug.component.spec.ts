import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDebugComponent } from './cd-debug.component';

describe('CdDebugComponent', () => {
  let component: CdDebugComponent;
  let fixture: ComponentFixture<CdDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

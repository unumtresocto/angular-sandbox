import { TestBed } from '@angular/core/testing';

import { ComponentLevelService } from './component-level.service';

describe('ComponentLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentLevelService = TestBed.get(ComponentLevelService);
    expect(service).toBeTruthy();
  });
});

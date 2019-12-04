import { TestBed } from '@angular/core/testing';

import { GlobalLevelService } from './global-level.service';

describe('GlobalLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalLevelService = TestBed.get(GlobalLevelService);
    expect(service).toBeTruthy();
  });
});

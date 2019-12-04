import { TestBed } from '@angular/core/testing';

import { ModuleLevelService } from './module-level.service';

describe('ModuleLevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleLevelService = TestBed.get(ModuleLevelService);
    expect(service).toBeTruthy();
  });
});

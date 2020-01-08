import { TestBed } from '@angular/core/testing';

import { MemoEngineService } from './memo-engine.service';

describe('MemoEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoEngineService = TestBed.get(MemoEngineService);
    expect(service).toBeTruthy();
  });
});

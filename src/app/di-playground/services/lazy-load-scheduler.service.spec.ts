import { TestBed } from '@angular/core/testing';

import { LazyLoadSchedulerService } from './lazy-load-scheduler.service';

describe('LazyLoadSchedulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyLoadSchedulerService = TestBed.get(LazyLoadSchedulerService);
    expect(service).toBeTruthy();
  });
});

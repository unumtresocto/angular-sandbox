import { TestBed } from '@angular/core/testing';

import { IsolatedService } from './lazy-isolated.service';

describe('IsolatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsolatedService = TestBed.get(IsolatedService);
    expect(service).toBeTruthy();
  });
});

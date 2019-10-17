import { TestBed } from '@angular/core/testing';

import { VcDataProviderService } from './vc-data-provider.service';

describe('VcDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VcDataProviderService = TestBed.get(VcDataProviderService);
    expect(service).toBeTruthy();
  });
});

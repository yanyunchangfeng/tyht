import { TestBed, inject } from '@angular/core/testing';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

describe('SelectivePreloadingStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadingStrategyService]
    });
  });

  it('should be created', inject([SelectivePreloadingStrategyService], (service: SelectivePreloadingStrategyService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import {SelectivePreloadingStrategy} from "./selective-preloading-strategy.service"
describe('SelectivePreloadingStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectivePreloadingStrategy]
    });
  });

  it('should be created', inject([SelectivePreloadingStrategy], (service: SelectivePreloadingStrategy) => {
    expect(service).toBeTruthy();
  }));
});

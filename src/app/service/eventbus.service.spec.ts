import { TestBed, inject } from '@angular/core/testing';

import { EventbusService } from './eventbus.service';

describe('EventbusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventbusService]
    });
  });

  it('should be created', inject([EventbusService], (service: EventbusService) => {
    expect(service).toBeTruthy();
  }));
});

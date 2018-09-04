import { TestBed, inject } from '@angular/core/testing';

import { TwisaApiService } from './twisa-api.service';

describe('TwisaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwisaApiService]
    });
  });

  it('should be created', inject([TwisaApiService], (service: TwisaApiService) => {
    expect(service).toBeTruthy();
  }));
});

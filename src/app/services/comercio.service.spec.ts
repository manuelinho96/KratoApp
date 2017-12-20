import { TestBed, inject } from '@angular/core/testing';

import { ComercioService } from './comercio.service';

describe('ComercioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComercioService]
    });
  });

  it('should be created', inject([ComercioService], (service: ComercioService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { VersesService } from './verses.service';

describe('VersesService', () => {
  let service: VersesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

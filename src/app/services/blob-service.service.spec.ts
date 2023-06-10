import { TestBed } from '@angular/core/testing';

import { BlobServiceService } from './blob-service.service';

describe('BlobServiceService', () => {
  let service: BlobServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlobServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

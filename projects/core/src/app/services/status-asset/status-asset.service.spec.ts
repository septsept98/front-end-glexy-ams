import { TestBed } from '@angular/core/testing';

import { StatusAssetService } from './status-asset.service';

describe('StatusAssetService', () => {
  let service: StatusAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

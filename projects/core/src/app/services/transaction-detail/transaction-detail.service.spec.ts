import { TestBed } from '@angular/core/testing';

import { TransactionDetailService } from './transaction-detail.service';

describe('TransactionDetailService', () => {
  let service: TransactionDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

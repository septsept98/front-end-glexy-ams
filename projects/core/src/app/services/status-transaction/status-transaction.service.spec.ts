import { TestBed } from '@angular/core/testing';

import { StatusTransactionService } from './status-transaction.service';

describe('StatusTransactionService', () => {
  let service: StatusTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

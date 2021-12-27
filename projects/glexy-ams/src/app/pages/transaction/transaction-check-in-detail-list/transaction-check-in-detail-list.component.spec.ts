import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCheckInDetailListComponent } from './transaction-check-in-detail-list.component';

describe('TransactionCheckInDetailListComponent', () => {
  let component: TransactionCheckInDetailListComponent;
  let fixture: ComponentFixture<TransactionCheckInDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCheckInDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCheckInDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

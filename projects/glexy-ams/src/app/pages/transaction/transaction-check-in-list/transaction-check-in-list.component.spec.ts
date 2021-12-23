import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCheckInListComponent } from './transaction-check-in-list.component';

describe('TransactionCheckInListComponent', () => {
  let component: TransactionCheckInListComponent;
  let fixture: ComponentFixture<TransactionCheckInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCheckInListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCheckInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

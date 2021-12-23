import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCheckInComponent } from './transaction-check-in.component';

describe('TransactionCheckInComponent', () => {
  let component: TransactionCheckInComponent;
  let fixture: ComponentFixture<TransactionCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

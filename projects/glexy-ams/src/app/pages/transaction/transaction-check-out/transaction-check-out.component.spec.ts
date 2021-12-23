import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCheckOutComponent } from './transaction-check-out.component';

describe('TransactionCheckOutComponent', () => {
  let component: TransactionCheckOutComponent;
  let fixture: ComponentFixture<TransactionCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCheckOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

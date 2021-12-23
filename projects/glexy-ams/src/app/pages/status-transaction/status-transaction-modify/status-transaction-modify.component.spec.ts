import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTransactionModifyComponent } from './status-transaction-modify.component';

describe('StatusTransactionModifyComponent', () => {
  let component: StatusTransactionModifyComponent;
  let fixture: ComponentFixture<StatusTransactionModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTransactionModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTransactionModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

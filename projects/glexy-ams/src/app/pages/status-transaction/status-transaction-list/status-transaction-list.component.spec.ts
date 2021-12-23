import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTransactionListComponent } from './status-transaction-list.component';

describe('StatusTransactionListComponent', () => {
  let component: StatusTransactionListComponent;
  let fixture: ComponentFixture<StatusTransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTransactionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

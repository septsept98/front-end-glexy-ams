import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTrxExpiredComponent } from './history-trx-expired.component';

describe('HistoryTrxExpiredComponent', () => {
  let component: HistoryTrxExpiredComponent;
  let fixture: ComponentFixture<HistoryTrxExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTrxExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTrxExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

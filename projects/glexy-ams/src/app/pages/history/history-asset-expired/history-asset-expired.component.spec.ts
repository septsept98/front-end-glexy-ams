import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAssetExpiredComponent } from './history-asset-expired.component';

describe('HistoryAssetExpiredComponent', () => {
  let component: HistoryAssetExpiredComponent;
  let fixture: ComponentFixture<HistoryAssetExpiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryAssetExpiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAssetExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

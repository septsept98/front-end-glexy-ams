import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTrackAssetComponent } from './history-track-asset.component';

describe('HistoryTrackAssetComponent', () => {
  let component: HistoryTrackAssetComponent;
  let fixture: ComponentFixture<HistoryTrackAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTrackAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryTrackAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

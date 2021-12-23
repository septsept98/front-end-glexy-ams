import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAssetComponent } from './track-asset.component';

describe('TrackAssetComponent', () => {
  let component: TrackAssetComponent;
  let fixture: ComponentFixture<TrackAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailInfoComponent } from './history-detail-info.component';

describe('HistoryDetailInfoComponent', () => {
  let component: HistoryDetailInfoComponent;
  let fixture: ComponentFixture<HistoryDetailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDetailInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

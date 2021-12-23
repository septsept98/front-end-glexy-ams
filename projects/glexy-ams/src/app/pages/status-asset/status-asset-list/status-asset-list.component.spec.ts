import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAssetListComponent } from './status-asset-list.component';

describe('StatusAssetListComponent', () => {
  let component: StatusAssetListComponent;
  let fixture: ComponentFixture<StatusAssetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAssetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAssetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

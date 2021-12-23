import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusAssetModifyComponent } from './status-asset-modify.component';

describe('StatusAssetModifyComponent', () => {
  let component: StatusAssetModifyComponent;
  let fixture: ComponentFixture<StatusAssetModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusAssetModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusAssetModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

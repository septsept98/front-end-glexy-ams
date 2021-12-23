import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeModifyComponent } from './asset-type-modify.component';

describe('AssetTypeModifyComponent', () => {
  let component: AssetTypeModifyComponent;
  let fixture: ComponentFixture<AssetTypeModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetTypeModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTypeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

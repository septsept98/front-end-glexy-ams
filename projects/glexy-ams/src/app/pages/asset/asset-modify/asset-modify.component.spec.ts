import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetModifyComponent } from './asset-modify.component';

describe('AssetModifyComponent', () => {
  let component: AssetModifyComponent;
  let fixture: ComponentFixture<AssetModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

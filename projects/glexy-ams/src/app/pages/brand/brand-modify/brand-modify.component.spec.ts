import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandModifyComponent } from './brand-modify.component';

describe('BrandModifyComponent', () => {
  let component: BrandModifyComponent;
  let fixture: ComponentFixture<BrandModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

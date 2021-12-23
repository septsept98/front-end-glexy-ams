import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDetailModifyComponent } from './permission-detail-modify.component';

describe('PermissionDetailModifyComponent', () => {
  let component: PermissionDetailModifyComponent;
  let fixture: ComponentFixture<PermissionDetailModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionDetailModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDetailModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

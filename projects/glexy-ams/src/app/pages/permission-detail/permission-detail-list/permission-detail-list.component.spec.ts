import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionDetailListComponent } from './permission-detail-list.component';

describe('PermissionDetailListComponent', () => {
  let component: PermissionDetailListComponent;
  let fixture: ComponentFixture<PermissionDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

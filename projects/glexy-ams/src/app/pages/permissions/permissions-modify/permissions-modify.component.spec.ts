import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionsModifyComponent } from './permissions-modify.component';

describe('PermissionsModifyComponent', () => {
  let component: PermissionsModifyComponent;
  let fixture: ComponentFixture<PermissionsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

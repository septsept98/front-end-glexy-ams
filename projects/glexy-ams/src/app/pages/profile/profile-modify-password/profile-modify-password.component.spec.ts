import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModifyPasswordComponent } from './profile-modify-password.component';

describe('ProfileModifyPasswordComponent', () => {
  let component: ProfileModifyPasswordComponent;
  let fixture: ComponentFixture<ProfileModifyPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileModifyPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileModifyPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

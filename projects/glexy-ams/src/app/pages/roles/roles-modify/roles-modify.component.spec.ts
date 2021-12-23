import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesModifyComponent } from './roles-modify.component';

describe('RolesModifyComponent', () => {
  let component: RolesModifyComponent;
  let fixture: ComponentFixture<RolesModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

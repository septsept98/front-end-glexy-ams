import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyModifyComponent } from './company-modify.component';

describe('CompanyModifyComponent', () => {
  let component: CompanyModifyComponent;
  let fixture: ComponentFixture<CompanyModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

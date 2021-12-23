import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceModifyComponent } from './invoice-modify.component';

describe('InvoiceModifyComponent', () => {
  let component: InvoiceModifyComponent;
  let fixture: ComponentFixture<InvoiceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

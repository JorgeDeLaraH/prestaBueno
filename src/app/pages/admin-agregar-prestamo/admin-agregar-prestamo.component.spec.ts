import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarPrestamoComponent } from './admin-agregar-prestamo.component';

describe('AdminAgregarPrestamoComponent', () => {
  let component: AdminAgregarPrestamoComponent;
  let fixture: ComponentFixture<AdminAgregarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAgregarPrestamoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAgregarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

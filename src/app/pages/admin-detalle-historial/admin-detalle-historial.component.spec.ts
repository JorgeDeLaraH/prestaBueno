import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetalleHistorialComponent } from './admin-detalle-historial.component';

describe('AdminDetalleHistorialComponent', () => {
  let component: AdminDetalleHistorialComponent;
  let fixture: ComponentFixture<AdminDetalleHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDetalleHistorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminDetalleHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModificarPrestamoComponent } from './admin-modificar-prestamo.component';

describe('AdminModificarPrestamoComponent', () => {
  let component: AdminModificarPrestamoComponent;
  let fixture: ComponentFixture<AdminModificarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminModificarPrestamoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminModificarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

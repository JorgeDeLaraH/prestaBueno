import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEliminarPrestamoComponent } from './admin-eliminar-prestamo.component';

describe('AdminEliminarPrestamoComponent', () => {
  let component: AdminEliminarPrestamoComponent;
  let fixture: ComponentFixture<AdminEliminarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEliminarPrestamoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEliminarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

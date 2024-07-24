import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultarPrestamosComponent } from './admin-consultar-prestamos.component';

describe('AdminConsultarPrestamosComponent', () => {
  let component: AdminConsultarPrestamosComponent;
  let fixture: ComponentFixture<AdminConsultarPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminConsultarPrestamosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminConsultarPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

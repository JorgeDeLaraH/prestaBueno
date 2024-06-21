import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarPrestamoComponent } from './pagar-prestamo.component';

describe('PagarPrestamoComponent', () => {
  let component: PagarPrestamoComponent;
  let fixture: ComponentFixture<PagarPrestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagarPrestamoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagarPrestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

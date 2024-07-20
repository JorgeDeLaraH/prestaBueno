import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagar-prestamo',
  standalone: true,
  imports: [],
  templateUrl: './pagar-prestamo.component.html',
  styleUrl: './pagar-prestamo.component.css'
})
export class PagarPrestamoComponent {

  constructor(private router: Router){}

  //Metodos para navegacion
  Consultar(){ this.router.navigate(['/consultar']); }
  Historial(){ this.router.navigate(['/historial']); }
  Pagar(){ this.router.navigate(['/pagos-pendientes']); }
}

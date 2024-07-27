import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solicitar-prestamo',
  standalone: true,
  imports: [],
  templateUrl: './solicitar-prestamo.component.html',
  styleUrl: './solicitar-prestamo.component.css'
})
export class SolicitarPrestamoComponent {
  constructor(private router: Router){}

  //Metodos para navegacion
  Consultar(){ this.router.navigate(['/consultar']); }
  Historial(){ this.router.navigate(['/historial']); }
  Pagar(){ this.router.navigate(['/pagos-pendientes']); }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagos-pendientes',
  standalone: true,
  imports: [],
  templateUrl: './pagos-pendientes.component.html',
  styleUrl: './pagos-pendientes.component.css'
})
export class PagosPendientesComponent {
  constructor(private router: Router){}

  //Metodos para navegacion
  Consultar(){ this.router.navigate(['/consultar']); }
  Historial(){ this.router.navigate(['/historial']); }
  Pagar(){ this.router.navigate(['/pagos-pendientes']); }
}

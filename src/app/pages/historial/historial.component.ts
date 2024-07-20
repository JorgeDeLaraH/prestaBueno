import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  constructor(private router: Router){}

  //Metodos para navegacion
  Consultar(){ this.router.navigate(['/consultar']); }
  Historial(){ this.router.navigate(['/historial']); }
  Pagar(){ this.router.navigate(['/pagos-pendientes']); }
  PagarActual(){ this.router.navigate(['/pagar']); }
}

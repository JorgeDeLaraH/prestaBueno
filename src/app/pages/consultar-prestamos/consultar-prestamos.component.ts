import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-consultar-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './consultar-prestamos.component.html',
  styleUrl: './consultar-prestamos.component.css'
})
export class ConsultarPrestamosComponent {
  
  constructor(private router: Router){}
  
  //Metodos para navegacion
  Consultar(){ this.router.navigate(['/consultar']); }
  Historial(){ this.router.navigate(['/historial']); }
  Pagar(){ this.router.navigate(['/pagos-pendientes']); }
  Solicitar(){ this.router.navigate(['/solicitar']); }
}

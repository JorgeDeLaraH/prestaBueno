import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { ClientsService } from '../../services/clients.service';
@Component({
  selector: 'app-solicitar-prestamo',
  standalone: true,
  imports: [],
  templateUrl: './solicitar-prestamo.component.html',
  styleUrl: './solicitar-prestamo.component.css'
})
export class SolicitarPrestamoComponent implements OnInit{
  constructor(
    private router: Router,
    private alerta:AlertService,
    private clients:ClientsService
  ){}

  //Metodos para navegacion
  Consultar(){ this.router.navigate(['consultar']); }
  Historial(){ this.router.navigate(['historial']); }
  Pagar(){ this.router.navigate(['pagos-pendientes']); }

  @HostListener('window:popstate',['$event'])
  onPopState(event: any){
    this.alerta.alerta("Alerta", "Por seguridad se cerro sesión", "warning", "OK")
    localStorage.removeItem("key");
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const key = localStorage.getItem('key');
      if (key === null || key ==='undefined') {
        this.alerta.alerta("Alerta", "Por favor inicia sesión", "warning", "OK");
        this.router.navigate(['login']);
      } else {
        this.clients.getUser(key).subscribe((res:any)=>{
          console.log(res)
        })
      }
    } else {
      this.alerta.alerta("Alerta", "Por favor inicia sesión", "warning", "OK");
      this.router.navigate(['login']);
    }
  }
}

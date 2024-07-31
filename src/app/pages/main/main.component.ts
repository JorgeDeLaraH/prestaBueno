import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { ClientsService } from '../../services/clients.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
id:any
nombre=""
rol=""
  constructor(
    private alerta:AlertService,
    private router:Router,
    private clients:ClientsService
  ){}

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

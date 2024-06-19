import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers:[AlertService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  constructor(private alerta: AlertService){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  alerta1(){
    this.alerta.alerta('Marijuana','Que no te cache la guardia nacional','warning','Fumar ahora');
  }

  credenciales={
    usuario:"",
    password:""
  }
  
}

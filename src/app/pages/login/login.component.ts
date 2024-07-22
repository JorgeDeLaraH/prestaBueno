import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers:[AlertService, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  
  constructor(
    private alerta: AlertService, 
    private authService: AuthService, 
    private router:Router){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  login(){
    if(this.credenciales.password=='' || this.credenciales.user==''){
      this.alerta.alerta('Campos Vacios','Por favor llena los campos para continuar','warning','Ok');
    }else{
      this.authService.authPost(this.credenciales).subscribe((res:any)=>{
        if(res.Estatus_Acreditado==true){
          console.log(res)
          localStorage.setItem('key',res.prueba);
          this.router.navigate(['main']);
        }else{
          this.alerta.alerta('Credenciales Invalidas','Por favor verifica tus credenciales','error','Regresar');
        }
      })
    }
    
  }

  credenciales={
    user:"Jorge",
    password:"Jorjais-12"
  }
  
}

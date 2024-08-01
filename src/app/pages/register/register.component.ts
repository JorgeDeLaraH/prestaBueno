import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { Router, RouterModule } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  providers:[AlertService,ClientsService,Router],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  newUser={
    user:"",
    pas1:"",
    pas2:""
  }

  constructor(
    private alerta: AlertService, 
    private clientService: ClientsService, 
    private router:Router){}

  register(){
    this.newUser.user.trim()
    if(this.newUser.user=="" || this.newUser.pas1=="" || this.newUser.pas2==""){
      this.alerta.alerta('Campos Vacios','Por favor llena los campos para continuar','warning','Ok');
    }else{
      if(this.newUser.pas1==this.newUser.pas2){
        let data={
         user: this.newUser.user,
         password: this.newUser.pas1 
        }
        this.clientService.register(data).subscribe((res:any)=>{
          console.log(res)
          if(res.Estado==true){
            console.log(res.Estado)
            this.alerta.alerta('Atencion','Usuario creado con exito','success','Ok');
          }else if(res.Estado==false){
            this.alerta.alerta('Error!','Este usuario ya existe','warning','Ok');
          }else{
            this.alerta.alerta('Error!','No hay comunicación, llame a soporte','error','Ok');
          }
        })
      }else{
        this.alerta.alerta('Error!','Las contraseñas deben ser iguales','warning','Ok');
      }
    }
    
  }

}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers:[AlertService, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  constructor(private alerta: AlertService, private authService: AuthService){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  alerta1(){
    this.authService.authPost(this.credenciales).subscribe((res)=>{
      console.log(res);
    })
  }

  credenciales={
    user:"Jorge",
    password:"Jorjais-12"
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  providers:[AlertService, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{
  
  constructor(private alerta: AlertService, private authService: AuthService, private router: Router){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  alerta1(){
    this.authService.authPost(this.credenciales).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/consultar']);
    })
  }

  credenciales={
    user:"Jorge",
    password:"Jorjais-12"
  }
  
}

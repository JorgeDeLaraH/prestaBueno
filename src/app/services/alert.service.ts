import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AlertService {

  constructor() { }

  public alerta(title:any, text:any,icon:any,button:any){
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: button
    });
  }
}

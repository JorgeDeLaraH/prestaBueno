import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _URL_GETUSER, _URL_REGISTER } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  public register(data:Object):Observable<Object>{
    return this.http.post(_URL_REGISTER,data);
  }
  public getUser(id:any):Observable<any>{
    return this.http.get(_URL_GETUSER+id);
  }
  
}

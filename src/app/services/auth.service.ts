import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iUser } from '../models/user';
import { iJwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:27017';
  authSubject = new BehaviorSubject(false);
  //private token :string;

  constructor(private httpClient: HttpClient) { }
  saveUser(user:iUser):Observable<iJwtResponse>{
    return this.httpClient.post<iJwtResponse>(`${this.AUTH_SERVER}/saveUser`,
      user).pipe(tap(
        (res:iJwtResponse)=>{
          if(res){
            //guardar
          }
        }
      ));
  }
  getUser(user:iUser):Observable<iJwtResponse>{
    return this.httpClient.post<iJwtResponse>(`${this.AUTH_SERVER}/getUser`,
      user).pipe(tap(
        (res:iJwtResponse)=>{
          if(res){
            //guardar
          }
        }
      ));
  }
}

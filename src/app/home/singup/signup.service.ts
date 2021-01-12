import { NewUser } from './new-user';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "http://localhost:3000"
@Injectable({providedIn:'root'})

export class SignUpService{
  constructor(private http: HttpClient){}

  checkUserNameTaken(usuario: string){
    return this.http.get(API_URL + '/user/exists/' + usuario);
  }
  signup(newUser: NewUser){
    return this.http.post(API_URL + "/user/signup", newUser);
  }
}

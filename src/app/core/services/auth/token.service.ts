import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  //revisar autenticar por cookies, es mala practica hacerlo con local storage

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token')
  }
}

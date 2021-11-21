// Estos pquetes permiten hacer peticiones ajax al backend, colocarlo en el app.module
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }

  prueba() {
    return 'Hola mundo desde el servicio de Angular';
  }

  register(user: any): Observable<any> {
    //convertir el objeto del usuario con un json string
    let params = JSON.stringify(user);

    // Definir cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Hacer petiicion ajax
    return this._http.post(this.url + 'register', params, { headers: headers });
  }
  signup(user: any, gettoken: any): Observable<any> {
    //Comprobar si llega el gettoken
    if (gettoken != null) {
      user.gettoken = gettoken;
    }
    let params = JSON.stringify(user);

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'login', params, { headers: headers });
  }
}

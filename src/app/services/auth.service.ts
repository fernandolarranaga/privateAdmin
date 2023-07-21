import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    let body = { email: email, password: password };
    return this.http.post('https://reqres.in/api/login', body) //eve.holt@reqres.in
    //return this.http.post('http://localhost:4000/api/signin', body)
  }
}
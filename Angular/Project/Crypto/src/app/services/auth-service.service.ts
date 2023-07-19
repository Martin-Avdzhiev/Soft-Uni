import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Register, Login} from '../types/user';
import {CookieService} from 'ngx-cookie-service'
const registerUrl = 'http://localhost:3000/api/register'; //POST
const loginUrl = 'http://localhost:3000/api/login'; //POST

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  postRegister(data: Register){
    console.log(data)
    this.http.post(registerUrl, data).subscribe({
      next: (res) => {
        console.log(res)
      }, error: (error) => console.log(error)
    });
  }
  postLogin(data: Login){
    this.http.post(loginUrl, data).subscribe({
      next: (res) => {
        console.log(res)
        this.cookieService.set('username', data.username);
      }, error: (error) => console.log(error)
    });
  }
}

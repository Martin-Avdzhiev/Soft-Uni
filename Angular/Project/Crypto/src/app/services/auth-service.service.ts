import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, Login } from '../types/user';
import { CookieService } from 'ngx-cookie-service'
const registerUrl = 'http://localhost:3000/api/register'; //POST
const loginUrl = 'http://localhost:3000/api/login'; //POST

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  postRegister(data: Register) {
    this.http.post(registerUrl, data).subscribe({
      next: (res) => {
        this.cookieService.set('username', data.username);
        this.cookieService.delete('error');
      }, error: (error) => this.cookieService.set('error', error.error.message)
    });
  }
  postLogin(data: Login): string | void {
    this.http.post(loginUrl, data).subscribe({
      next: (res) => {
        this.cookieService.set('username', data.username);
        this.cookieService.delete('error');
      }, error: (error) => {
        this.cookieService.set('error', error.error.message);
      }
    });
  }
}

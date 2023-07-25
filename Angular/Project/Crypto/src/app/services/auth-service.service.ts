import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, Login } from '../types/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Profile } from '../types/user';
const registerUrl = 'http://localhost:3000/api/register'; //POST
const loginUrl = 'http://localhost:3000/api/login'; //POST
const profileUrl = 'http://localhost:3000/api/users/profile'; //GET
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }



  postRegister(data: Register) {
    this.http.post(registerUrl, data).subscribe({
      next: (res) => {
        this.cookieService.set('username', data.username);
        this.cookieService.delete('error');
        this.router.navigate(['/']);
      }, error: (error) => this.cookieService.set('error', error.error.message)
    });
  }
  postLogin(data: Login): string | void {
    this.http.post(loginUrl, data).subscribe({
      next: (res) => {
        this.cookieService.set('username', data.username);
        this.cookieService.delete('error');
        this.router.navigate(['/']);
      }, error: (error) => {
        this.cookieService.set('error', error.error.message);
      }
    });
  }

  getProfileInfo(username: string): void {
    const usernameHttp = new HttpParams().set('username', username);
    this.http.get(profileUrl, { params: usernameHttp }).subscribe({
      next: (profile) => {
        console.log(profile)
        //return profile
      }, error: (error) => console.log(error)
    })
  }
}

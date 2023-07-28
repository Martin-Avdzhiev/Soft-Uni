import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, Login } from '../types/user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
const registerUrl = 'http://localhost:3000/api/register'; //POST
const loginUrl = 'http://localhost:3000/api/login'; //POST
const profileUrl = 'http://localhost:3000/api/users/profile/'; //GET need to add /:username
const updateProfileUrl = 'http://localhost:3000/api/users/profile'; //PUT
const buyCryptoUrl = 'http://localhost:3000/api/cryptos/buy/' //POST, add type of crypto at the end of link
const sellCryptoUrl = 'http://localhost:3000/api/cryptos/sell/' //POST, add type of crypto at the end of link
const depositUrl = 'http://localhost:3000/api/cryptos/deposit' //POST
const withdrawUrl = 'http://localhost:3000/api/cryptos/withdraw' //POST
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  deposit(amount: number){
    const username = this.cookieService.get('username');
    const data = {amount, username}
    this.http.post(depositUrl,data).subscribe({
      next: (res:any)=>{
        this.cookieService.delete('walletBalance');
        this.cookieService.set('walletBalance', res.walletBalance);
      }, error: (error) =>{
        console.log(error)
      }
    })
  }
  withdraw(amount:number){
    const username = this.cookieService.get('username');
    const data = {amount, username}
    this.http.post(withdrawUrl,data).subscribe({
      next: (res:any)=>{
        this.cookieService.delete('walletBalance');
        this.cookieService.set('walletBalance', res.walletBalance);
      }, error: (error) =>{
        console.log(error)
      }
    })
  }
  buyCrypto(payingDollars: number, typeOfCypto: string, amount: number) {
    const username = this.cookieService.get('username');
    const data = {
      payingDollars,
      username,
      amount
    }
    this.http.post(buyCryptoUrl + typeOfCypto, data).subscribe({
      next: (res:any) => {
        this.cookieService.delete('error');
        this.cookieService.delete('walletBalance');
        this.cookieService.set('walletBalance', res.walletBalance);
      },error: (err) => {
        this.cookieService.set('error', err.error.message);
      }
    })
  }
  sellCrypto(receivingDollars: number, typeOfCypto: string, amount: number) {
    const username = this.cookieService.get('username');
    const data = {
      receivingDollars,
      username,
      amount
    }
    this.http.post(sellCryptoUrl + typeOfCypto, data).subscribe({
      next: (res:any) => {
        this.cookieService.delete('error');
        this.cookieService.delete('walletBalance');
        this.cookieService.set('walletBalance', res.walletBalance);
      },error: (err) => {
        this.cookieService.set('error', err.error.message);
      }
    })
  }



  postRegister(data: Register) {
    this.http.post(registerUrl, data).subscribe({
      next: (res: any) => {
        this.cookieService.set('username', res.username);
        this.cookieService.set('email', res.email);
        this.cookieService.delete('error');
        this.router.navigate(['/']);
      }, error: (error) => this.cookieService.set('error', error.error.message)
    });
  }
  postLogin(data: Login): string | void {
    this.http.post(loginUrl, data).subscribe({
      next: (res: any) => {
        this.cookieService.set('username', res.username);
        this.cookieService.set('email', res.email);
        this.cookieService.delete('error');
        this.router.navigate(['/']);
      }, error: (error) => {
        console.log(error)
        this.cookieService.set('error', error.error.message);
      }
    });
  }
  getProfileInfo(): Observable<any> {
    const username = this.cookieService.get('username');
  
    return this.http.get(profileUrl + username).pipe(
      map((res: any) => {
        const imageUrl = res.imageUrl;
        const walletBalance = res.walletBalance;
        this.cookieService.set('imageUrl', imageUrl);
        this.cookieService.set('walletBalance', walletBalance);
        return {
          ownCryptos: res.ownCryptos,
          imageUrl,
          walletBalance,
        };
      })
    );
  }
  // getProfileInfo(): any {
  //   const username = this.cookieService.get('username');
  //   let response:any = {};
  //   this.http.get(profileUrl + username).subscribe({
  //     next: (res: any) => {
  //       const imageUrl = res.imageUrl;
  //       const walletBalance = res.walletBalance
  //       this.cookieService.set('imageUrl', imageUrl);
  //       this.cookieService.set('walletBalance', walletBalance);
  //       response.ownCryptos = res.ownCryptos;
  //     }, error: (error) => console.log(error)
  //   })
  //     return response
  // }

  updateProfileInfo(imageUrl: string) {
    const email = this.cookieService.get('email');
    const username = this.cookieService.get('username');
    const data = {
      username,
      email,
      imageUrl
    }

    this.http.put(updateProfileUrl, data).subscribe({
      next: (res) => {
      },
      error: (error) => console.log(error)
    })
  }
}

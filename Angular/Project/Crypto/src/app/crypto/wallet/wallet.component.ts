import { Component,OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
import { animate, state, style, transition, trigger, } from '@angular/animations';
const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('0.5s ease-in', style({ opacity: 1 })),
]);
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('0.5s ease-out', style({ opacity: 0 })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
  animations: [fadeIn, fadeOut]
})
export class WalletComponent implements OnInit, AfterViewInit,DoCheck {
  email: string | undefined;
  username: string | undefined;
  walletBalance: string | undefined;
  ownCryptosObject: any;
  ownCryptosArray: any;
  isShowedDeposit: boolean = false;
  error: string | undefined;
  success: string | undefined;
  constructor(private authService: AuthServiceService, private cookieService: CookieService){}

  showDeposit(){
    this.isShowedDeposit = !this.isShowedDeposit;
  }

  depositDollars(amount:any){
    if(!amount.value){
      this.error = 'Enter a deposit sum!';
      return
    }
    if(amount.value < 10){
      this.error = 'Minimum deposit is $10';
      return
    }
    this.error = undefined;
    this.authService.deposit(Number(amount.value));
    this.success = `Deposited amount of $${amount.value} is successfully!`;
    amount.value = '';
    setTimeout(() => {
      this.success = undefined;
    }, 5000);
  }
  ngOnInit(): void {
    this.walletBalance = Number(this.cookieService.get('walletBalance')).toFixed(2);

    this.email = this.cookieService.get('email');
    this.username = this.cookieService.get('username');
    this.ownCryptosObject = this.authService.getProfileInfo()
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.ownCryptosArray = this.ownCryptosObject.ownCryptos
      for(const crypto of this.ownCryptosArray){
          crypto.amount = crypto.amount.toFixed(4); 
      }
    }, 100);
  }
  ngDoCheck(): void {
    this.walletBalance = Number(this.cookieService.get('walletBalance')).toFixed(2);
  }
}

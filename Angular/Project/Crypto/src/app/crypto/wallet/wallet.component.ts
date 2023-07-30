import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
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
export class WalletComponent implements OnInit, DoCheck {
  email: string | undefined;
  username: string | undefined;
  walletBalance: string  | undefined
  ownCryptosObject: any;
  ownCryptosArray: any;
  isShowedDeposit: boolean = false;
  error: string | undefined;
  success: string | undefined;
  isBoughtCrypto: boolean = false;
  constructor(private authService: AuthServiceService, private cookieService: CookieService) { }

  showDeposit() {
    this.isShowedDeposit = !this.isShowedDeposit;
  }

  depositDollars(amount: any) {
    if (!amount.value) {this.error = 'Enter a deposit sum!'; amount.value = '';return};
    if(amount.value.includes(',')){amount.value = amount.value.replace(',','.');}
    amount.value = Number(amount.value)
    if(isNaN(amount.value)){this.error = 'Invalid withdrawal sum!'; amount.value = '';return;}
    if (amount.value < 10) {this.error = 'Minimum deposit is $10!'; amount.value = '';return};
    this.error = undefined;
    this.authService.changeBalance(Number(amount.value), 'deposit');
    this.success = `Deposited amount of $${Number(amount.value).toFixed(2)} is successfully!`;
    amount.value = '';
    setTimeout(() => {
      this.success = undefined;
    }, 5000);
  }

  withdrawDollars(amount: any){
    if (!amount.value) {this.error = 'Enter a deposit sum!'; amount.value = '';return;};
    if(amount.value.includes(',')){amount.value = amount.value.replace(',','.');}
    amount.value = Number(amount.value)
    if(isNaN(amount.value)){this.error = 'Invalid withdrawal sum!'; amount.value = '';return;}
    if (amount.value < 10) {this.error = 'Minimum withdraw is $10!'; amount.value = '';return};
    if (amount.value > Number(this.walletBalance)) {this.error = 'You don\'t have enough money!'; amount.value = '';return};
    this.error = undefined;
    this.authService.changeBalance(Number(amount.value), 'withdraw');
    this.success = `Withdraw  amount of $${Number(amount.value).toFixed(2)} is successfully!`;
    amount.value = '';
    setTimeout(() => {
      this.success = undefined;
    }, 5000);
  }
  ngOnInit(): void {
    this.walletBalance = Number(this.cookieService.get('walletBalance')).toFixed(2);

    this.email = this.cookieService.get('email');
    this.username = this.cookieService.get('username');
   this.authService.getProfileInfo().subscribe({
      next: (value) => {
        this.ownCryptosArray = value.ownCryptos;
        if(this.ownCryptosArray.length == 0){this.isBoughtCrypto = true;}
        for (const crypto of this.ownCryptosArray) {
          crypto.amount = crypto.amount.toFixed(4);
        }
      },
      error: (error) => { console.log(error) }
    });
  }

  ngDoCheck(): void {
    this.walletBalance = Number(this.cookieService.get('walletBalance')).toFixed(2);
  }
}

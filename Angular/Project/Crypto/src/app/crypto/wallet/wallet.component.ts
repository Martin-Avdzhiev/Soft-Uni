import { Component,OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  email: string | undefined;
  username: string | undefined;
  walletBalance: string | undefined;
  constructor(private authService: AuthServiceService, private cookieService: CookieService){}
  ngOnInit(): void {
    this.walletBalance = Number(this.cookieService.get('walletBalance')).toFixed(2);

    this.email = this.cookieService.get('email');
    this.username = this.cookieService.get('username');
  }
}

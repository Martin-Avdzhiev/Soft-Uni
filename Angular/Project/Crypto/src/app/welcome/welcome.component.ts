import { Component, OnInit, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit,DoCheck {
  isLogged: boolean = false;
  constructor(private cookieService: CookieService){}
  ngOnInit(): void {
    this.isLogged = this.cookieService.check('username');
  }
  ngDoCheck(): void {
    this.isLogged = this.cookieService.check('username');
  }
}

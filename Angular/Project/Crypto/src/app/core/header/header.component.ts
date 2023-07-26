import { Component, OnInit, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{
    username: string | undefined;
    constructor(private cookieService: CookieService, private router: Router){}
   ngOnInit(): void {
     this.username = this.cookieService.get('username');
   }
   ngDoCheck(): void {
    this.username = this.cookieService.get('username');
   }
   logout():void{
    this.cookieService.deleteAll();
    this.router.navigate(['/']);
   }
}

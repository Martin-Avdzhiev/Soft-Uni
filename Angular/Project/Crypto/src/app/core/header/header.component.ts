import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{
    username: string | undefined;
    constructor(private cookieService: CookieService){}
   ngOnInit(): void {
     this.username = this.cookieService.get('username');
   }
   ngDoCheck(): void {
    this.username = this.cookieService.get('username');
   }
   logout():void{
    this.cookieService.delete('username');
   }
}

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
@Injectable({providedIn: 'root'})
export class AuthActivate implements CanActivate{
    isLogged: boolean = false;
    constructor (private cookieService: CookieService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       this.isLogged = this.cookieService.check('username');
       if(!this.isLogged){
        this.router.navigate(['/login']);
       } 
        return  this.isLogged;
    }
}
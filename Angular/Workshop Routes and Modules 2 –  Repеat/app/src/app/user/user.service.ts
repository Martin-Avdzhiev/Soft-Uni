import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  get isLogged():boolean{
    return !!this.user;
  }
  constructor() {
    try {
      const lsUser = localStorage.getItem('[user]') || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
      console.log(error);
    }
   }

   login():void{
    this.user = {
      email: 'marto@abv.bg',
      firstName: 'Marto'
    },
    localStorage.setItem('[user]', JSON.stringify(this.user));
   }

   logout():void{
    this.user = undefined;
    localStorage.removeItem('[user]');
   }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private activatedRoute: ActivatedRoute ,private router: Router, private authService: AuthService) {

}
  loginHandler():void{
    this.authService.user = {
      themes: ['asd'],
      posts: ['asd1'],
      _id: 'id',
      tel: '089213412',
      email: 'abv.bg',
      username: 'Pesho',
      password: 'pass',
      created_at: 'suzdaden',
      updatedAt: 'aktualiziran',
      __v: 0
    };

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigate([returnUrl]);
  }
}

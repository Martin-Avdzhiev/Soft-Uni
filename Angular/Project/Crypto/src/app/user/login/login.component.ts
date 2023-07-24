import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthServiceService, private cookieService: CookieService) { }
  error: string | undefined;
  login(form: NgForm): void {
    if (form.invalid) return;
    this.authService.postLogin(form.value);
    const isError = this.cookieService.get('error');
    if (isError) this.error = isError;
  }
}

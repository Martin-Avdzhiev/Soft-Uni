import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthServiceService, private cookieService: CookieService){}
  error:string | undefined;
register(form: NgForm):void{
  if(form.invalid) return;
  this.authService.postRegister(form.value);
  const isError = this.cookieService.get('error');
    if (isError) this.error = isError;
}
}

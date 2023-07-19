import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthServiceService){}
  login(form: NgForm):void{

      if(form.invalid) return;
      this.authService.postLogin(form.value);
      //console.log(form.value)
    
  }
}

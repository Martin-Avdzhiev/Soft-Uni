import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthServiceService){}
register(form: NgForm):void{
  if(form.invalid) return;
  this.authService.postRegister(form.value);
  //console.log(form.value)
}
}

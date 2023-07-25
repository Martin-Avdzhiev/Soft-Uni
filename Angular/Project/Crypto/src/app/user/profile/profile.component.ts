import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  email: string | undefined;
  username: string | undefined;
  constructor(private authService : AuthServiceService){};
  ngOnInit(): void {
   [this.email, this.username] = this.authService.getProfileInfo();

  }
}

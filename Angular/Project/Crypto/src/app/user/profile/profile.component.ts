import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string | undefined;
  username: string | undefined;
  displayChangeAvatarDiv: boolean = false;
  isValidImageUrl: boolean = false;
  error: string | undefined;
  constructor(private authService: AuthServiceService) { };
  ngOnInit(): void {
    [this.email, this.username] = this.authService.getProfileInfo();
  }

  showDiv(): void {
    this.displayChangeAvatarDiv = !this.displayChangeAvatarDiv;
  }
  changeAvatar(imageUrl: any): void {
    const pattern = /^https?:\/\//;
    const match = imageUrl.match(pattern);
    if (match) this.isValidImageUrl = true;
    else {
      this.isValidImageUrl = false;
      this.error = 'The image URL must start with http//: or https//: !'
      return
    }
    const input = match.input;
    this.authService.updateProfileInfo(input);
    this.displayChangeAvatarDiv = !this.displayChangeAvatarDiv;
  }
}

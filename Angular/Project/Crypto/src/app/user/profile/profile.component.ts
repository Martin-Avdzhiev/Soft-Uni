import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Profile } from 'src/app/types/user';
import { CookieService } from 'ngx-cookie-service';
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
  imageUrl: string | undefined;
  defaultImage: string = 'https://content.fortune.com/wp-content/uploads/2021/02/Elon-Musk-with-Bitcoin_web.jpg';
  constructor(private authService: AuthServiceService, private cookieService: CookieService) { };
  ngOnInit(): void {
    this.imageUrl = this.cookieService.get('imageUrl');
    if(!this.imageUrl) this.imageUrl = this.defaultImage;
  }

  showDiv(): void {
    this.displayChangeAvatarDiv = !this.displayChangeAvatarDiv;
    this.error = undefined;
  }
  changeAvatar(imageUrl: any): void {
    const pattern = /^https?:\/\//;
    const match = imageUrl.match(pattern);
    if (match) this.isValidImageUrl = true;
    else {
      this.isValidImageUrl = false;
      this.error = 'The image URL must start with http//: or https//:'
      return
    }
    const input = match.input;
    this.authService.updateProfileInfo(input);
    this.cookieService.delete('imageUrl');
    this.cookieService.set('imageUrl', input)
    this.displayChangeAvatarDiv = !this.displayChangeAvatarDiv;
    this.error = undefined;
    this.ngOnInit();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css']
})
export class CurrentThemeComponent implements OnInit{
  theme: Theme | undefined;
  constructor(private apiService: ApiService, private activatedRouter: ActivatedRoute, private userService: UserService){}

  get firstName():string{
    return this.userService.user?.firstName || '';
  }

  get isLogged():boolean{
    return this.userService.isLogged;
  }

  fetchTheme():void{
    const id = this.activatedRouter.snapshot.params['themeId'];
    this.apiService.getTheme(id).subscribe(theme => {
      this.theme = theme;
    })
  }

  ngOnInit(): void {
    this.fetchTheme()
  }
}

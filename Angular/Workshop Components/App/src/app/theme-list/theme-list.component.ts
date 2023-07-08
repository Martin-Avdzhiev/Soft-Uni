import { Component, OnInit } from '@angular/core';
import { Theme } from '../types/theme';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit{
  themeList : Theme[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themeList = themes;
        this.isLoading = false;
      },
      error: (error)=> {
        this.isLoading = false;
        console.log(error);
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {
  themeList: Theme[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (value) => {
       this.themeList = value;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Theme } from '../app/types/theme';
import { Post } from './types/post';

const apiUrl = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  themeList: Theme[] = [];
  constructor(private http: HttpClient){}
  getThemes(){
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPosts(limit?:number){
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
  }
}


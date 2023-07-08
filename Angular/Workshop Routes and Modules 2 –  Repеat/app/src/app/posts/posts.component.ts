import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postList: Post[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (value) => {
        this.postList = value;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}

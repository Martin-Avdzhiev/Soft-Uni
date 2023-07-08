import { Component, OnInit } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];
  isLoading = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (posts) => {
        this.isLoading = false
        this.postList = posts;
      }, error: (error) => {
        this.isLoading = false
        console.log(error)
      }
    })
  }
}

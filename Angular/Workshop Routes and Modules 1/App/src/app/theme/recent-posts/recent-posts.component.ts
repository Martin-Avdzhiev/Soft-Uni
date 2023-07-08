import { Component, } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../shared/interfaces/post';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent {
  constructor (private ApiService: ApiService){}

  posts: IPost[] | null=null;
  errorFetchingData = false;

  ngOnInit() : void{
    this.ApiService.loadPosts(5).subscribe({
      next:(value) =>{
        this.posts = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      }
    });
  }
}

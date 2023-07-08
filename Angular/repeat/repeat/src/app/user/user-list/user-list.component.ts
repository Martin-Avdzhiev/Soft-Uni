import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/User';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];
  user: any = {};
  constructor(private userService: UserService) { }


  ngOnInit(): void {
    this.loadUsers();
    this.loadUser(1);
  }

  loadUsers(): void {
    this.userService.fetchUsers().subscribe({
      next: (users) => {
        this.userList = users;
      },
      error: (error) => { console.log(error) }
    })
  }

  loadUser(id:number):void{
    this.userService.fetchSingleUser(id).subscribe({
      next:(users)=> {
        this.user = users;
        console.log(this.user)
      }
    })
  }
}

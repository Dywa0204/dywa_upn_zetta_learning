import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

import { User } from '../user-service/user.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  usersList : User[] = [];

  isUserSelected = false;
  selectedUser : User = new User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getAllUser();
  }

  userSelected(user: User){
    this.isUserSelected = true
    this.selectedUser = user;
  }

  searchUser(keyword: any){
    this.usersList = this.userService.searchUser(keyword.target.value)
  }

  
}

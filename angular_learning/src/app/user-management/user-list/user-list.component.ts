import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

import { User } from '../user-service/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users : User[] = [];

  isUserSelected = false;
  selecteduser : User = new User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUser()
  }

  userSelected(user: User){
    this.isUserSelected = true
    this.selecteduser = user;
  }
}

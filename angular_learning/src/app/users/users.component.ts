import { Component, OnInit } from '@angular/core';
import { Users, AvatarLinks } from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  fullname = '';
  email = '';
  avatar = 0;

  users = Users;
  avatarLinks = AvatarLinks;

  modalClass = 'users-modal close';
  avatarClass = [
    'avatar-img selected',
    'avatar-img',
    'avatar-img',
    'avatar-img'
  ];

  constructor() {
    
  }

  ngOnInit() {
  }

  onAddUser(modal: string){
    this.modalClass = 'users-modal ' + modal;
  }

  addNewUser(){
    if(this.fullname !== '' && this.email !== ''){
      this.users.push({fullname : this.fullname, email: this.email, avatar: this.avatar});
      this.modalClass = 'users-modal close';
      this.fullname = '';
      this.email = '';
      this.avatar = 0;
      this.chooseAvatar(0);
    }else{
      alert("Field Cannot Blank");
    }
  }

  chooseAvatar(num: number){
    this.avatar = num;
    for(let i = 0; i < 4; i++){
      if(i == num){
        this.avatarClass[i] = 'avatar-img selected';
      } 
      else{
        this.avatarClass[i] = 'avatar-img';
      } 
    }
  }
}

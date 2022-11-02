import { Component, Input, OnInit } from '@angular/core';
import { User, AvatarLinks } from '../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  avatarLinks = AvatarLinks;

  @Input() user: User = new User;

  constructor() { }

  ngOnInit(): void {
  }

}

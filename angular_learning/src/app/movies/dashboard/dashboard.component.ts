import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menu = [true, false, false];

  constructor() { }

  ngOnInit(): void {
    
  }

  openMenu(val: string){
    switch(val){
      case 'movie':
        this.menu = [true, false, false];
        break;
      case 'actor':
        this.menu = [false, true, false];
        break;
    }
  }
}

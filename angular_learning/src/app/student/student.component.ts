import { Component,Input, OnInit } from '@angular/core';
import { Teacher } from '../model/todo.model';

@Component({
 selector: 'app-student',
 templateUrl: './student.component.html',
 styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

 @Input()
  teacher: Teacher = new Teacher;
 @Input('principle')
  principleName!: string;

 constructor() { }

 ngOnInit() {
 }

}
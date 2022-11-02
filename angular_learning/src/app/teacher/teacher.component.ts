import { Component, OnInit } from '@angular/core';
import { Teachers } from '../model/todo.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacherName = 'adwd';
  teachers = Teachers;
  principle = 'Principle';

  constructor() { }

  ngOnInit() {
  }

  onAddTeacher(){
    this.teachers.push({name : this.teacherName, subject: "adawdad"});
  }
  onUpdateServerName(event: Event) {
    this.teacherName = (<HTMLInputElement>event.target).value;
  }
}
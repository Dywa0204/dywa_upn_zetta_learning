import { Component, OnInit } from '@angular/core';
import { Todos } from '../model/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  theTodo = '';
  todoDesc = '';
  todos = Todos;

  constructor() { }

  ngOnInit() {
  }

  onAddTodo(){
    this.todos.push({todo : this.theTodo, desc: this.todoDesc});
  }

  /* onUpdateTodo(event: Event) {
    this.theTodo = (<HTMLInputElement>event.target).value;
  } */

}

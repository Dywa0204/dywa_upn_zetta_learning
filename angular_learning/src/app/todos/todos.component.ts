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
    if(this.theTodo !== '' && this.todoDesc !== ''){
      this.todos.push({todo : this.theTodo, desc: this.todoDesc});
    }else{
      alert("Field Cannot Blank");
    }
  }
}

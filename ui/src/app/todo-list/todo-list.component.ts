import { Component, OnInit } from '@angular/core'
import { Todo } from '../models/todo.model'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[]

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { id: 1, title: 'Todo 1', detail: 'Todo 1 details', done: false },
      { id: 2, title: 'Todo 2', detail: 'Todo 2 details', done: true },
      { id: 3, title: 'Todo 3', detail: 'Todo 3 details', done: false }
    ]
  }
}

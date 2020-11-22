import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Todo } from '../models/todo.model'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$ = this.todoService.getList()

  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit(): void {}

  edit(todo: Todo): void {
    this.router.navigate(['/edit', { id: todo.id }])
  }
}

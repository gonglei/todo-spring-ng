import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Todo } from '../models/todo.model'
import { TodoService } from '../services/todo.service'
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$ = this.todoService.getList()

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {}

  edit(todo: Todo): void {
    this.router.navigate(['/edit', { id: todo.id }])
  }

  view(todo: Todo): void {
    this.router.navigate(['/view', { id: todo.id }])
  }

  delete(todo: Todo): void {
    this.dialog
      .open(ConfirmDeleteComponent, { data: todo })
      .afterClosed()
      .subscribe(result => {
        if (result) {
          const subs = this.todoService.delete(todo.id).subscribe(() => {
            this.todos$ = this.todoService.getList()
            subs.unsubscribe()
          })
        }
      })
  }

  toggleDone(todo: Todo): void {
    const subs = this.todoService
      .addOrUpdate({ ...todo, done: !todo.done })
      .subscribe(() => {
        todo.done = !todo.done
        subs.unsubscribe()
      })
  }
}

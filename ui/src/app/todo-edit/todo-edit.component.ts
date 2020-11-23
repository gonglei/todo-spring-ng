import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Todo } from '../models/todo.model'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  todoForm: FormGroup
  todo: Todo
  subs: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private todoService: TodoService
  ) {
    this.todoForm = this.fb.group({
      title: [''],
      detail: ['']
    })
  }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params

    if (!id) {
      this.todo = new Todo()
    } else {
      this.subs = this.todoService.getTodo(id).subscribe((todo: Todo) => {
        this.todo = todo
        this.todoForm.controls.title.setValue(todo.title)
        this.todoForm.controls.detail.setValue(todo.detail)
      })
    }
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe()
    }
  }

  submitForm(): void {
    const todo = { ...this.todo, ...this.todoForm.value }
    this.todoService.addOrUpdate(todo).subscribe(() => {
      this.router.navigate(['/list'])
    })
  }

  cancel(): void {
    this.router.navigate(['/list'])
  }
}

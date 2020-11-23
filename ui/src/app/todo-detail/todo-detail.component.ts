import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Todo } from '../models/todo.model'
import { TodoService } from '../services/todo.service'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  todo: Todo
  subs: Subscription

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params

    if (!id) {
      this.todo = new Todo()
    } else {
      this.subs = this.todoService.getTodo(id).subscribe((todo: Todo) => {
        this.todo = todo
      })
    }
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe()
    }
  }
}

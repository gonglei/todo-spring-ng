import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todoForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: [''],
      detail: ['']
    })
  }

  ngOnInit(): void {}

  submitForm(): void {
    console.log(this.todoForm.value)
  }
}

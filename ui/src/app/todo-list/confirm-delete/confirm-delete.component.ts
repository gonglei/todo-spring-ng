import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Todo } from 'src/app/models/todo.model'

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public todo: Todo) {}

  ngOnInit(): void {}
}

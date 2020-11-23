import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { TodoDetailComponent } from './todo-detail/todo-detail.component'
import { TodoEditComponent } from './todo-edit/todo-edit.component'
import { TodoListComponent } from './todo-list/todo-list.component'

const routes: Routes = [
  { path: 'list', component: TodoListComponent },
  { path: 'edit', component: TodoEditComponent },
  { path: 'view', component: TodoDetailComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Todo } from '../models/todo.model'

@Injectable({ providedIn: 'root' })
export class TodoService {
  private baseUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  getList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.baseUrl}/todos`)
  }
}

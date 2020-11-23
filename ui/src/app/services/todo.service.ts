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

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseUrl}/todos/${id}`)
  }

  addOrUpdate(todo: Todo): Observable<Todo> {
    if (todo.id) {
      return this.http.put<Todo>(`${this.baseUrl}/todos`, todo)
    }
    return this.http.post<Todo>(`${this.baseUrl}/todos`, todo)
  }

  delete(id: number): any {
    return this.http.delete<number>(`${this.baseUrl}/todos/${id}`)
  }
}

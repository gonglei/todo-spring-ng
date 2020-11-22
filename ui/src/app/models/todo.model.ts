export class Todo {
  id: number
  title: string
  detail: string
  done: boolean

  constructor(options: Partial<Todo> = {}) {
    Object.assign(this, options)
  }
}

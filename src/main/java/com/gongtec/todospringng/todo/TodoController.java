package com.gongtec.todospringng.todo;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/todos")
public class TodoController {
  private final TodoRepository todoRepository;

  public TodoController(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  @GetMapping
  public List<Todo> getTodos() {
    return (List<Todo>) todoRepository.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Todo> getTodoById(@PathVariable Long id) {
    return todoRepository.findById(id);
  }

  @PostMapping
  public Todo addTodo(@RequestBody Todo todo) {
    return todoRepository.save(todo);
  }

  @PutMapping
  public Todo updateTodo(@RequestBody Todo todo) {
    return todoRepository.save(todo);
  }

  @DeleteMapping("/{id}")
  public void deleteTodoById(@PathVariable Long id) {
    todoRepository.deleteById(id);
  }
}

package com.gongtec.todospringng.todo;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
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

  private final ModelMapper modelMapper;

  public TodoController(TodoRepository todoRepository, ModelMapper modelMapper) {
    this.todoRepository = todoRepository;
    this.modelMapper = modelMapper;
  }

  @GetMapping
  public List<TodoDto> getTodos() {
    List<Todo> todos = (List<Todo>) todoRepository.findAll();
    return todos.stream().map(this::convertToDto).collect(Collectors.toList());
  }

  @GetMapping("/{id}")
  public Optional<TodoDto> getTodoById(@PathVariable Long id) {
    return todoRepository.findById(id).map(this::convertToDto);
  }

  @PostMapping
  public TodoDto addTodo(@RequestBody TodoDto todoDto) {
    return addOrUpdate(todoDto);
  }

  @PutMapping
  public TodoDto updateTodo(@RequestBody TodoDto todoDto) {
    return addOrUpdate(todoDto);
  }

  @DeleteMapping("/{id}")
  public void deleteTodoById(@PathVariable Long id) {
    todoRepository.deleteById(id);
  }

  private TodoDto addOrUpdate(TodoDto todoDto) {
    Todo todo = convertToEntity(todoDto);
    Todo savedTodo =  todoRepository.save(todo);
    return convertToDto(savedTodo);
  }

  private TodoDto convertToDto(Todo todo) {
    return modelMapper.map(todo, TodoDto.class);
  }

  private Todo convertToEntity(TodoDto todoDto) {
    return modelMapper.map(todoDto, Todo.class);
  }
}

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-todo';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAllTodos().subscribe(todos => this.todos = [...todos, ...this.todos]);
  }

  onAddTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(newTodo => this.todos.push(newTodo));
  }

  onRemoveTodo(todo: Todo) {
    this.todoService.removeTodoById(todo.id).subscribe(() => { this.todos = this.todos.filter(t => t.id !== todo.id); });
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoService.toggleTodoComplete(todo).subscribe(updatedTodo => {
      this.todos.map( t => {
        if (t.id === todo.id ) {
          return updatedTodo;
        } else {
          return t;
        }
      });
    });
  }

}

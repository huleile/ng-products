import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models';

@Injectable()
export class TodoService {
    constructor(private api: ApiService) {}

    addTodo(todo: Todo): Observable<Todo> {
        return this.api.createTodo(todo);
    }

    getAllTodos(): Observable<Todo[]> {
        return this.api.getAllTodos();
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.api.updateTodo(todo);
    }

    removeTodoById(id: number): Observable<Todo> {
        return this.api.removeTodoById(id);
    }

    getTodoById(id: number): Observable<Todo> {
        return this.api.getTodoById(id);
    }

    toggleTodoComplete(todo: Todo): Observable<Todo> {
        todo.complete = !todo.complete;
        return this.api.updateTodo(todo);
    }
}
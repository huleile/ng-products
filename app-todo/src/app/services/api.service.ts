import { catchError } from 'rxjs/operators';
import { Todo } from './../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient
    ) {}

    public getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${API_URL}/todos`);
    }

    public createTodo(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>(`${API_URL}/todos`, todo);
    }

    public getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${API_URL}/todos/${id}`);
    }

    public updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${API_URL}/todos/${todo.id}`, todo);
    }

    public removeTodoById(id: number): Observable<Todo> {
        return this.http.delete<Todo>(`${API_URL}/todos/${id}`);
    }
}

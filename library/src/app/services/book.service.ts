import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entities';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
    books: Book[];

    constructor(private http: HttpClient) {}

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(`http://127.0.0.1:43210/books`);
    }
}

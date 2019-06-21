import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }

  getHeros() {
    this.messageService.add(`HeroService: fetched heroes`);
    return this.http.get(`http://127.0.0.1:43210/heroes`).pipe(
      catchError(this.handleError<Hero[]>('getHeros', []))
    );
  }

  getHero(id: number) {
    this.messageService.add(`HeroService: Fetched hero id ${id}`);
    return this.http.get(`http://127.0.0.1:43210/heroes/${id}`).pipe(
      catchError(this.handleError<Hero>('getHero', {}))
    );
  }

}

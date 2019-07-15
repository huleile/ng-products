import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorage } from '../services';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private localStorage: LocalStorage,
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set('token', 'happy')
        });
        console.log('new headers:', clonedRequest.headers.keys());
        return next.handle(clonedRequest).pipe(tap(event => {
            if (event instanceof HttpResponse) {
                if (event.body.code === 401) {
                    this.router.navigateByUrl('/login');
                }
            }
        }));
    }
}

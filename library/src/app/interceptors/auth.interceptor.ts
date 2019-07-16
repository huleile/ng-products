import { tap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CODES } from '../constants/codes';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    skipAuth: string[];
    constructor(
        private router: Router
    ) {
        // 不需要登录认证的URL
        this.skipAuth = [`/api/user/login`];
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const startTime = Date.now();
        let authReq: HttpRequest<any>;
        let status: string;
        // 如果是不需要认证的API, 则不需要添加头部Token信息
        if (this.isSkipAuth(req.url)) {
            authReq = req.clone();
        } else {
            const clonedRequest = req.clone({
                headers: req.headers.set('token', 'happy')
            });
            return next.handle(clonedRequest).pipe(
                tap(event => {
                        if (event instanceof HttpResponse) {
                            if (event.body.code === CODES.notLogin) {
                                this.router.navigateByUrl('/login');
                            }
                            status = 'Success';
                        }
                    },
                    error => status = 'Failed'
                ),
                finalize(() => {
                    const costTime = Date.now() - startTime;
                    console.log('---------------------¶¶¶¶¶¶¶∞start∞¶¶¶¶¶¶-------------------------');
                    console.log(`${req.method} ${req.urlWithParams} ${status} took ${costTime} ms`);
                    console.log('---------------------¶¶¶¶¶¶¶∞∞end∞∞¶¶¶¶¶¶-------------------------');
                })
            );
        }
    }

    isSkipAuth(url: string): boolean {
       if (this.skipAuth.some(api => api === url)) {
           return true;
       }
       return false;
    }
}

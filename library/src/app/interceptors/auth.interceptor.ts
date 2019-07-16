import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
        const reqStarted = Date.now();
        let authReq: HttpRequest<any>;
        // 如果是不需要认证的API, 则不需要添加头部Token信息
        if (this.isSkipAuth(req.url)) {
            authReq = req.clone();
        } else {
            const clonedRequest = req.clone({
                headers: req.headers.set('token', 'happy')
            });
            return next.handle(clonedRequest).pipe(tap(event => {
                if (event instanceof HttpResponse) {
                    const costTime = Date.now() - reqStarted;
                    console.log('---------------------¶¶¶¶¶¶¶∞start∞¶¶¶¶¶¶-------------------------');
                    console.log(`Request for ${req.urlWithParams} took ${costTime} ms`);
                    console.log('---------------------¶¶¶¶¶¶¶∞∞end∞∞¶¶¶¶¶¶-------------------------');
                    if (event.body.code === 401) {
                        this.router.navigateByUrl('/login');
                    }
                }
            }));
        }
    }

    isSkipAuth(url: string): boolean {
       if (this.skipAuth.some(api => api === url)) {
           return true;
       }
       return false;
    }
}

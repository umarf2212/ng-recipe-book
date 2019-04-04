import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //clone (simply copy) the request as requests are immutable.
        //const copiedReq = req.clone({headers: req.headers.append('', '')});
        const copiedReq = req.clone({ 
            params: req.params.set('auth', this.authService.getToken())
        });
        
        console.log('Intercepted', copiedReq);
        
        return next.handle(copiedReq);
    }
}
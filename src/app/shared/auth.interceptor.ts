import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { switchMap, take } from 'rxjs/operators'

import * as fromApp from '../store/app.reducers'
import * as fromAuth from '../auth/store/auth.reducers'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //clone (simply copy) the request as requests are immutable.
        //const copiedReq = req.clone({headers: req.headers.append('', '')});
        // ^ for copiedReq
    
        //console.log('Intercepted', copiedReq);
        
        return this.store.select('auth')
            .pipe(take(1))
            .pipe(switchMap(
                (authState: fromAuth.State) => {
                    const copiedReq = req.clone({ 
                        params: req.params.set('auth', authState.token)
                    });
                    return next.handle(copiedReq);
                }
            ));
    }
}
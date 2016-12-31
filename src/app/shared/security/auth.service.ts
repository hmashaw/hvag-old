/**
 * auth.service
 */

import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { FirebaseAuth } from 'angularfire2';

import { AuthInfo } from './auth-info';


@Injectable()
export class AuthService {

    /**
     * We do not simply return the user auth info via login (below) because we want the auth
     * state to be available anywhere in the application; for example, to the header component.
     */
    static UNKNOWN_USER = new AuthInfo(null);

    authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);


    constructor(private auth: FirebaseAuth) {}


    /**
     * FirebaseAuth.lgin returns a promise.  We can use (return) Observable.fromPromise; however,
     * this might not always work.  Lets go with work-around auxillary method
     */
    login(email, password): Observable<any> {
        return this.fromFirebaseAuthPromise(this.auth.login({email, password}));
    }


    /**
     * 
     * @param {promise} promise
     * @returns {subject} Observable
     */
    fromFirebaseAuthPromise(promise): Observable<any> {
        const subject = new Subject<any>();

        promise
            .then(
                res => {
                    const authInfo = new AuthInfo(this.auth.getAuth().uid);
                    this.authInfo$.next(authInfo);
                    subject.next(res);
                    subject.complete();
                },
                err => {
                    this.authInfo$.error(err);
                    subject.error(err);
                    subject.complete();
                })

        return subject.asObservable();
    }

}

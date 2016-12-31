/**
 * MVP was constructed with bootstrap data in <company>.ts.  Refactoring to utilize Firebase
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

import { Company } from './company';


@Injectable()
export class CompanyServiceFB {

    constructor(private af: AngularFire) { }

    observeCompany(): Observable<any> {
        return this.af.database.object('website/-K_KhPmo07AfWlXsu-U3')
    }

}

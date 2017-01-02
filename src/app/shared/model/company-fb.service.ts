/**
 * MVP was constructed with bootstrap data in <company>.ts.  Refactoring to utilize Firebase
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';

import { Company } from './company';
import { BlogEntry } from './blog-entry';


@Injectable()
export class CompanyServiceFB {

    constructor(private db: AngularFireDatabase) { }


    observeCompany(): Observable<any> {
        return this.db.object('website/-K_KhPmo07AfWlXsu-U3')
    }


    getAllBlogEntries():Observable<BlogEntry[]> {
        return (this.db.list('blog'))
            .map(BlogEntry.fromJSONList)
    }

}

/**
 * When deconstructing, don't yet really know when to stop.  This is a Company
 * website so am starting with company object and service.  Should be able to
 * reuse 'site' and inject 'content'
 */

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Entity } from './common.d';
import { Company } from './company';
import { HVAG } from './hvag';


// Create a BehaviorSubject avatar to represent the company.  It will be an Observable
const avatarEntity = new BehaviorSubject<any>(HVAG); 

@Injectable()
export class CompanyService {

    company = avatarEntity;
    getCompanyInfo = avatarEntity.asObservable()


    getEntity() {
        return this.company.value
    }


    setEntity(entity: Entity) {
        this.company.next(entity);
    }
    
}

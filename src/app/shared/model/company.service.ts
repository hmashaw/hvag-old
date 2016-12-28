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


// Create a BehaviorSubject "avatar"" to represent the company.  It will be an Observable
const avatarEntity = new BehaviorSubject<any>(HVAG); 

@Injectable()
export class CompanyService {

    company = avatarEntity;
    observeCompany = avatarEntity.asObservable()


    /**
     * @returns {Company}
     */
    getCompany(): Company {
        let _company = this.company.value;

        return Company.fromJSON(_company.name,
                                _company.main_info,
                                _company.card1_title,
                                _company.card1_text,
                                _company.card2_title,
                                _company.card2_text,
                                _company.card3_title,
                                _company.card3_text);
    }


    /**
     * @param {Entity} entity Entity object with updates
     */
    setCompany(entity: Entity) {
        this.company.next(entity);
    }
    
}

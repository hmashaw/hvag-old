import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

import { CompanyService } from './shared/model/company.service';
import { Company } from './shared/model/company';


@Component({
    selector: 'hvag-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    //company$: any;
    //company: Company;
    
    /*
    constructor(private af: AngularFire,
                private companyService: CompanyService) {

        //const company$:FirebaseObjectObservable<any> = af.database.object('website/-K_4eBjhCKm32V_0XFc--')
        //company$.subscribe(console.log)
    }
*/

    ngOnInit() {
        /*
        this.company$ = this.companyService.observeCompany
        this.company = this.companyService.getCompany();
        */
    }


    onClick() {
        //console.log(this.company)
        //console.log('Looks Good!')
    }

}

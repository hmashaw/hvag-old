import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { CompanyService } from './shared/model/company.service';
import { Company } from './shared/model/company';


@Component({
    selector: 'hvag-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    title: string = 'HVAG Works!';

    company$: any;
    company: Company;
    
    constructor(private companyService: CompanyService) {}


    ngOnInit() {
        this.company$ = this.companyService.observeCompany
        this.company = this.companyService.getCompany();
    }


    onClick() {
        console.log(this.company)
        console.log('Looks Good!')
    }

}

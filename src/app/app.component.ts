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

    _company: any;
    company: Company;
    
    constructor(private companyService: CompanyService) {}


    ngOnInit() {
        this.companyService.getCompanyInfo
            .subscribe(
                company => this._company = company
            );

        this.company = Company.fromJSON(this._company.name,
                                        this._company.about);

        console.log(this._company.name);
        console.log(this._company.about)
        console.log("_company -> " + this._company);
        console.log(this._company)
    }


    onClick() {
        alert('Click Action')
        
        console.log("company -> " + this.company)
        console.log(this.company)
        console.log(this.company.name)
        console.log(this.company.about)
    }

}

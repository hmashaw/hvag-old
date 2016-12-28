import { Component, OnInit } from '@angular/core';

import { CompanyServiceFB } from '../../../shared/model/company-fb.service';

import { Company } from '../../../shared/model/company';


@Component({
    selector: 'hvag-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    company$: any;

    constructor(private companyService: CompanyServiceFB) { }

    ngOnInit() {
        this.company$ = this.companyService.observeCompany();
    }

}

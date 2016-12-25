import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../shared/model/company.service';
import { Company } from '../shared/model/company';

@Component({
    selector: 'hvag-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    company$: any;

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        this.company$ = this.companyService.observeCompany
    }

}

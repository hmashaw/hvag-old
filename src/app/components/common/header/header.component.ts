import { Component, OnInit } from '@angular/core';

import { CompanyServiceFB } from '../../../shared/model/company-fb.service';
import { AuthService } from '../../../shared/security/auth.service';

import { Company } from '../../../shared/model/company';
import { AuthInfo } from '../../../shared/security/auth-info';


@Component({
    selector: 'hvag-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    company$: any;
    authInfo$: AuthInfo;


    constructor(private companyService: CompanyServiceFB,
                private authService: AuthService) {}

    ngOnInit() {
        this.company$ = this.companyService.observeCompany();
        this.authService.authInfo$.subscribe(authInfo => this.authInfo$ = authInfo);

        console.log(this)
    }

}

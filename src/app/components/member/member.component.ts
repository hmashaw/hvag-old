import { Component, OnInit } from '@angular/core';

import { CompanyServiceFB } from '../../shared/model/company-fb.service';
import { Company } from '../../shared/model/company';

@Component({
    selector: 'hvag-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.css']
})

export class MemberComponent implements OnInit {

    company$: any;

      constructor(private companyServiceFB: CompanyServiceFB) { }

      ngOnInit() {
          this.company$ = this.companyServiceFB.observeCompany()
      }

}

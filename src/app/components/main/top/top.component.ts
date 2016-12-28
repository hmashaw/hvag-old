import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../../shared/model/company.service';
import { Company } from '../../../shared/model/company';

@Component({
  selector: 'hvag-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  company$: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
      this.company$ = this.companyService.observeCompany
  }

}

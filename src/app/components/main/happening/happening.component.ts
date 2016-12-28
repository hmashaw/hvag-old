import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../../shared/model/company.service';
import { Company } from '../../../shared/model/company';

@Component({
  selector: 'hvag-happening',
  templateUrl: './happening.component.html',
  styleUrls: ['./happening.component.css']
})
export class HappeningComponent implements OnInit {

  company$: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.company$ = this.companyService.observeCompany
  }

}

import { Component, OnInit } from '@angular/core';

import { CompanyService } from '../../shared/model/company.service';
import { Company } from '../../shared/model/company';

@Component({
  selector: 'hvag-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  company$: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
      this.company$ = this.companyService.observeCompany
  }

}

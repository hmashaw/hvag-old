/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompanyServiceFB } from './company-fb.service';

describe('CompanyFBService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyServiceFB]
    });
  });

  it('should ...', inject([CompanyServiceFB], (service: CompanyServiceFB) => {
    expect(service).toBeTruthy();
  }));
});

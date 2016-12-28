import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hvag-happening',
    templateUrl: './happening.component.html',
    styleUrls: ['./happening.component.css']
})

export class HappeningComponent implements OnInit {

  @Input()
  company: any;

  constructor() {}

  ngOnInit() {}

}

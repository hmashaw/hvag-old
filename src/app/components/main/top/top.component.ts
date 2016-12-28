import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hvag-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.css']
})

export class TopComponent implements OnInit {

    @Input()
    company: any;

    constructor() {}

    ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/security/auth.service';

@Component({
    selector: 'hvag-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) {

        this.form = this.fb.group({
            'email':      ['', [
                Validators.required, 
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]], 
            'password':   ['', Validators.required],
            'subscribe':  ['']
        })

    }


    ngOnInit() {}


    onSubmit() {
        const formValue = this.form.value;
        this.authService.login(formValue.email, formValue.password)
            .subscribe(
                () => this.router.navigate(['/member']),
                alert
            )

        console.log(formValue)
    }

}

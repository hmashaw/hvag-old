import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/security/auth.service';

@Component({
    selector: 'hvag-join',
    templateUrl: './join.component.html',
    styleUrls: ['./join.component.css']
})

export class JoinComponent implements OnInit {

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
            'confirm':    ['', Validators.required],
            'subscribe':  ['']
        })

    }


    ngOnInit() {
    }


    isPasswordMatch() {
        const val = this.form.value;
        return val.password == val.confirm;
    }


    onSubmit() {
        const formValue = this.form.value;
        this.authService.join(formValue.email, formValue.password)
            .subscribe(
                () => {
                    alert('You have successfully joined HVAG!');
                    this.router.navigate(['/member']);
                },
                err => alert(err)
            )
    }

}

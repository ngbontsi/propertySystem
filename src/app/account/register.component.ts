﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {

    isLinear = true;
    userForm: FormGroup;
    companyForm: FormGroup;
    addressForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            idNumber: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
        this.companyForm = this.formBuilder.group({
        companyName: ['', Validators.required],
        vatNumber: ['', Validators.required]
      });
        this.addressForm = this.formBuilder.group({
        streetNumber: ['', Validators.required],
        suburb: ['', Validators.required],
        region: ['', Validators.required],
        poBox: ['']
      });
    }
    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();
        this.loading = true;
        this.accountService.register(this.userForm.value, this.companyForm.value, this.addressForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['../login'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

import { Forms } from './forms.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormsService } from './forms.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit, OnDestroy {
  constructor(private formservice: FormsService) {}
  @ViewChild('f') signup: NgForm;
  opt = 'Advanced';
  formsarray: Forms[] = [];
  sample = {
    email: '',
    password: '',
    subscription: '',
  };
  submit = false;
  fetching = false;
  error = null;
  formData = {};
  onsubmit() {
    this.formData = this.signup.value.data;
    console.log(this.formData);
    this.submit = true;
    this.sample.email = this.signup.value.data.email;
    this.sample.password = this.signup.value.data.password;
    this.sample.subscription = this.signup.value.data.subscription;
    this.signup.reset();
    this.signup.form.patchValue({
      data: {
        subscription: this.sample.subscription,
      },
    });
  }
  private errSub: Subscription;
  ngOnInit() {
    console.log('get');
    this.errSub = this.formservice.error.subscribe((msg) => {
      this.error = msg;
    });
    this.fetching = true;
    this.formservice.fetchForms().subscribe(
      (form) => {
        this.fetching = false;
        this.formsarray = form;
      },
      (error) => {
        this.error = error.error.error + ' ' + error.status;
        console.log(error);
      }
    );
  }
  print(form: any) {
    console.log('forms', form);
    this.formservice.values.next(form);
  }
  onCreate(form) {
    this.formservice.createForms(
      form.data.email,
      form.data.subscription,
      form.data.password
    );
    console.log('current', form);
    let temp = form.data;
    this.print(temp);
  }

  onFetch() {
    this.fetching = true;
    this.formservice.fetchForms().subscribe(
      (form) => {
        this.fetching = false;
        this.formsarray = form;
      },
      (error) => {
        this.fetching = false;
        this.error = error.message;
      }
    );
  }

  onClear() {
    this.formservice.clearForms().subscribe(() => {
      this.formsarray = [];
    });
  }
  handle() {
    this.error = null;
  }
  ngOnDestroy() {
    this.errSub.unsubscribe();
  }
}
/*
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  signupForm: FormGroup;
  forbiddenUsernames = ['Test'];

  constructor() {}
  status=['Stable','Critical','Finished'];
  default='Stable';
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'projectname': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
        'projectstatus': new FormControl(this.default)
      }),
    });
    
    this.signupForm.statusChanges.subscribe( (status) => console.log(status) );
    this.signupForm.patchValue({
      'userData': {
        'projectname': 'Anna',
      }
    });
  }
  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
// this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
*/

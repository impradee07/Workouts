import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { FormsService } from '../forms.service';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.scss'],
})
export class TempFormComponent implements OnInit {
  temp: any;
  constructor(private formservice: FormsService) {}

  signupForm: FormGroup;
  forbiddenUsernames = ['Test'];
  status = ['Stable', 'Critical', 'Finished'];
  default = 'Stable';
  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        projectname: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
        projectstatus: new FormControl(this.default),
      }),
    });
    this.formservice.values.subscribe((data) => {
      this.temp = data;
    });
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
    this.signupForm.patchValue({
      userData: {
        projectname: 'Anna',
      },
    });
  }
  onSubmit() {
    console.log('form1', this.signupForm.value.userData);
    this.formservice.values.next(this.signupForm.value.userData);
    this.signupForm.reset();
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
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
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

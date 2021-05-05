import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';

import { FormsService } from '../forms.service';

@Component({
  selector: 'app-tempo-form',
  templateUrl: './tempo-form.component.html',
  styleUrls: ['./tempo-form.component.scss'],
})
export class TempoFormComponent implements OnInit {
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
      console.log('form2', data);
      this.signupForm.patchValue({
        userData: {
          projectname: this.temp.projectname,
          email: this.temp.email,
          projectstatus: this.temp.projectstatus,
        },
      });
    });
    this.signupForm.statusChanges.subscribe((status) => console.log(status));
  }
  onSubmit() {
    console.log(this.signupForm.value);
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

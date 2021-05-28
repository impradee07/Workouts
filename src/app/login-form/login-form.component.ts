import { Component, OnInit, ViewChild } from '@angular/core';

import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { AuthService, AuthResponse } from '../services/auth.service';

import { WeatherService } from '../services/data-service.service';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(
    private router: Router,
    private wService: WeatherService,
    notifierService: NotifierService,
    private authService: AuthService,
    private lService: LoginService
  ) {
    this.notifier = notifierService;
  }
  isUsername = true;
  isEmail = true;
  isPassword = true;
  username = '';
  email = '';
  password = '';
  signUp = false;
  num = 0;
  text = "Don't have an account?";
  ngOnInit(): void {}
  onSubmit() {
    if (this.email !== '' && this.password !== '' && this.username !== '') {
      this.authService.signUp(this.email, this.password).subscribe(
        (data) => {
          console.log(data);
          this.showNotification('Succesfully Signed In', 'success');
        },
        (errorRes) => {
          if (!errorRes.error || errorRes.error.error) {
            this.showNotification('Oops something went wrong!', 'error');
          }
          this.showNotification(errorRes.error.error.message, 'error');
        }
      );

      this.router.navigate(['/home']);
    } else if (this.email !== '' && this.password !== '') {
      this.authService.login(this.email, this.password).subscribe(
        (data) => {
          console.log(data);
          this.showNotification('Succesfully Logged In', 'success');
        },
        (errorRes) => {
          if (!errorRes.error || errorRes.error.error) {
            this.showNotification('Oops something went wrong!', 'error');
          }
          this.showNotification(errorRes.error.error.message, 'error');
        }
      );
    } else {
      this.showNotification('Invalid Credentials', 'error');
    }
  }
  validation(type: string, value: string) {
    let user = /^[a-zA-Z0-9]+$/;
    let email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (type === 'username') {
      return user.test(value);
    } else if (type === 'email') {
      return email.test(value);
    }
  }
  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
      this.isUsername = this.validation(type, this.username);
      console.log(this.username);
    } else if (type === 'email') {
      this.email = event.target.value;
      this.isEmail = this.validation(type, this.email);
    } else {
      this.password = event.target.value;
      this.isPassword = this.password.length >= 5;
    }
  }
  onSignUp() {
    this.signUp = !this.signUp;
    this.num++;
    if (this.num % 2) {
      this.text = 'Already have an account?';
    } else if (!(this.num % 2)) {
      this.text = "Don't have an account?";
    }
  }
  showNotification(message: string, type: 'success' | 'error') {
    this.notifier.notify(type, message);
  }
}

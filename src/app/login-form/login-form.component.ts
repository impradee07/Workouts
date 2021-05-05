import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../weather-widget-main/weather.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router, private wService: WeatherService) {}
  @ViewChild('f') signup: NgForm;
  ngOnInit(): void {}
  signIn() {
    console.log(this.signup.value);
    this.wService.getUsername(this.signup.value.username);
    this.router.navigate(['/home']);
  }
}

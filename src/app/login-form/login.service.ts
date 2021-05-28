import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: boolean = false;
  constructor() {}
  doLogin(name: string, email: string) {
    const user = { email, name };
    this.user = true;
    localStorage.setItem('UserData', JSON.stringify(user));
    console.log('loc', localStorage.getItem('UserData'));
  }
}

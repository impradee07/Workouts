import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(
      environment.weatherSignUp + environment.weatherAPIkey,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
  login(email: string, password: string) {
    return this.http.post<AuthResponse>(
      environment.weatherLogin + environment.weatherAPIkey,
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { AuthServiceInterface, AuthDataInterface } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../shared/settings';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {

  constructor(private http: HttpClient) { }

  logIn(authData: AuthDataInterface): void {
    this.http
      .post(Settings.LOGIN_END_POINT, authData)
      .subscribe((resp) => {
        console.log('LOGIN:', resp);
      });

  }
  logOut(): void {
    throw new Error('Method not implemented.');
  }
  logged(): void {
    throw new Error('Method not implemented.');
  }
}

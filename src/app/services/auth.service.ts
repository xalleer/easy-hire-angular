import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root',

})
export class AuthService {

  constructor(private apiService: ApiService) {}

  register(user: any) {
    return this.apiService.post('auth/register', user);
  }

  login(user: any): Observable<any> {
    return this.apiService.post('auth/login', user).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('auth_token', response.token);
        }
      })
    );
  }
}

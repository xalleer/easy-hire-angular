import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  post(endpoint: string, body: any, options: any = {}): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/${endpoint}`, body, this.createHeaders(options))
      .pipe(catchError(this.handleError));
  }

  private createHeaders(options: any): any {
    const headers = new HttpHeaders();

    const token = localStorage.getItem('auth_token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return {
      headers: headers,
      ...options,
    };
  }
  get(endpoint: string, options: any = {}): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${endpoint}`, this.createHeaders(options))
      .pipe(catchError(this.handleError));
  }

  put(endpoint: string, body: any, options: any = {}): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/${endpoint}`, body, this.createHeaders(options))
      .pipe(catchError(this.handleError));
  }

  delete(endpoint: string, options: any = {}): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${endpoint}`, this.createHeaders(options))
      .pipe(catchError(this.handleError));
  }


  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

}

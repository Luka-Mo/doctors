import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// constants:
export const URL = ' https://jsonplaceholder.typicode.com';
export const DOCTORS = '/users/';
export const TASKS = '/todos';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  fetchData(type: string): Observable<any> {
    return this.http.get<any>(URL + type);
  }

}

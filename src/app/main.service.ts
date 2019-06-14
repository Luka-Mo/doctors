import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// URL vars:
export const URL = ' https://jsonplaceholder.typicode.com';
export const DOCTORS = '/users/';
export const TASKS = '/todos';
export const QUERY = '?userId=';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  doctors: Observable<any>;
  tasks: Observable<any>;

  constructor(private http: HttpClient) {
    this.doctors = this.http.get<any>(URL + DOCTORS);
    this.tasks = this.http.get<any>(URL + TASKS);
  }

  /*
  fetchData(type: string): Observable<any> {
    return this.http.get<any>(URL + type);
  }
  */

}

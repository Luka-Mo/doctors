import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// URL vars:
export const URL = ' https://jsonplaceholder.typicode.com';
export const DOCTORS = '/users/';
export const TASKS = '/todos';
// export const QUERY = '?userId=';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {
    this.doctors();
    this.tasks();
  }

  tasks = () => this.http.get<any>(URL + TASKS);
  doctors = () => this.http.get<any>(URL + DOCTORS);

}

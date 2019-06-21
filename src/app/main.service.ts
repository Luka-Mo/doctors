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
  doctors: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.doctors = this.http.get<any>(URL + DOCTORS);
  }

  fetchTasks = id => this.http.get<any>(URL + TASKS + QUERY + id);

}

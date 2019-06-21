import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: Observable<any[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.list = this.mainService.doctors; // subscribe(data => this.list = data);
  }
}

import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: any[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.doctors().subscribe(data => this.list = data);
  }

}

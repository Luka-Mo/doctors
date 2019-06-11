import { Component, OnInit } from '@angular/core';
import { MainService, DOCTORS } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: any[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.fetchData(DOCTORS).subscribe(data => {
      console.log(data);
      this.list = data;
    });
  }

}

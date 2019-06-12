import { Component, OnInit, Input } from '@angular/core';
import { MainService, DOCTORS } from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() item: any[];
  @Input() list: any[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.fetchData(DOCTORS).subscribe(data => {
      this.list = data;
    });
  }

}

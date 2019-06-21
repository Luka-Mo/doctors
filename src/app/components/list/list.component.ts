import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { List } from '../../types';
import { Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() item: List;
  showInfo = false;
  showTasks = false;
  tasks$: Observable<string[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.tasks$ = this.mainService.fetchTasks(this.item.id);
  }


  toggleInfo() {
    this.showInfo = !this.showInfo;

    if (!this.showInfo) {
      this.showTasks = false;
    }
  }

  toggleTasks() {
    this.showTasks = !this.showTasks;
  }

}

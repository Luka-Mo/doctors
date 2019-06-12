import { Component, OnInit, Input } from '@angular/core';
import { MainService, TASKS, DOCTORS } from '../../main.service';
import { List } from '../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() item: List;
  @Input() showInfo = false;
  @Input() showTasks = false;

  tasks: any[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.fetchData(DOCTORS + this.item.id + TASKS).subscribe(data =>{
      this.tasks = data.filter(({userId}) => userId === this.item.id)
    });
  }


  onClick(id: number) {
    // prevent default - event is deprecated?!
    event.preventDefault();
    this.showInfo = !this.showInfo;

    if (!this.showInfo) {
      this.showTasks = false;
    }
  }

  toggleTasks() {
    this.showTasks = !this.showTasks;
  }

}

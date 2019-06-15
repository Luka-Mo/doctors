import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { List } from '../../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() item: List;
  showInfo = false;
  showTasks = false;
  tasks: string[];

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Nested route not functioning properly: returns all userIds
    // https://jsonplaceholder.typicode.com/users/1/todos
    this.mainService.tasks().subscribe(data => this.tasks = data.filter(({userId}) => userId === this.item.id ));
  }


  toggleInfo() {
    // event.preventDefault() -> event deprecated, href="null" / without href -> css
    this.showInfo = !this.showInfo;

    if (!this.showInfo) {
      this.showTasks = false;
    }
  }

  toggleTasks() {
    this.showTasks = !this.showTasks;
  }

}

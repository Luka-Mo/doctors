import { Component, OnInit, Input } from '@angular/core';
import { MainService, TASKS, DOCTORS } from '../../main.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  @Input() item: any[];
  @Input() showInfo = false;
  @Input() showTasks = false;

  tasks: any[];
  
  constructor(private mainService: MainService) { }

  ngOnInit() {
    console.log(DOCTORS + this.item.id + TASKS);
    this.mainService.fetchData(DOCTORS + this.item.id + TASKS).subscribe(data =>{
      this.tasks = data.filter(({userId})=>userId===this.item.id)
    });
  }
// Dynamic component loader
// https://angular.io/guide/dynamic-component-loader


  onClick(id: number) {
    // prevent default?!
    event.preventDefault();
    this.showInfo = !this.showInfo;
    console.log(`${id}: typeof: ${typeof id}`);
  }

  toggleTasks() {
    this.showTasks = !this.showTasks;
  }

}

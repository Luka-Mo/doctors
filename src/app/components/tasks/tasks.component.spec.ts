import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { mockTasks } from 'src/app/testdata';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let app: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    app = fixture.debugElement.componentInstance;
    app.task = Math.floor(Math.random()*mockTasks.length);
    fixture.detectChanges();
  });

  it('should create TaskComponent', () => {
    expect(app).toBeTruthy();
  });

});

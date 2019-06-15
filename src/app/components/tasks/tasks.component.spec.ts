import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { mockTasks } from 'src/app/testdata';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ],
      providers: [ TasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
  });

  it('should create TaskComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display a task', () => {
    component.task = mockTasks[Math.floor(Math.random() * mockTasks.length)];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('task-title')).not.toBe('');
  });

});

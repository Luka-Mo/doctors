import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { mockTasks } from 'src/app/testdata';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    component.task = mockTasks[Math.floor(Math.random() * mockTasks.length)];
    fixture.detectChanges();
  });

  it('should create TaskComponent', () => {
    expect(fixture).toBeTruthy();
  });

  it('should have a task object defined', () => {
    expect(component.task).toBeDefined();
  });

  it(`should display a task`, () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toBe(component.task.title);
  });

});

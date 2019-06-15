import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { MainService } from '../../main.service';

import { ListComponent } from './list.component';
import { TasksComponent } from '../tasks/tasks.component';
import { mockDoctor, mockTasks } from 'src/app/testdata';
import { of } from 'rxjs';

describe('ListComponent', () => {

  let fixture: ComponentFixture<ListComponent>;
  let component: ListComponent;

  const mainService = jasmine.createSpyObj('MainService', ['tasks']);
  const getTasksSpy = mainService.tasks.and.returnValue( of(mockTasks) );

  // setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ListComponent, TasksComponent ],
      providers: [ { provide: MainService, useValue: mainService }, ListComponent ],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
  });

  it('should create List component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should toggle Info', () => {
    expect(component.showInfo).toBeFalsy();
    component.toggleInfo();
    expect(component.showInfo).toBeTruthy();
  });

  it('should toggle Tasks', () => {
    expect(component.showTasks).toBeFalsy();
    component.toggleTasks();
    expect(component.showTasks).toBeTruthy();
  });

  it('should set Tasks to false when Info toggled to false', () => {
    component.toggleTasks();
    component.toggleInfo();
    expect(component.showTasks).toBeTruthy();
    expect(component.showInfo).toBeTruthy();
    component.toggleInfo();
    expect(component.showTasks).toBeFalsy();
    expect(component.showInfo).toBeFalsy();
  });

  it ('should show <h4>Contact information</h4> when showInfo === true', () => {
    component.item = mockDoctor[0];
    component.showInfo = true;
    fixture.detectChanges();
    getTasksSpy.and.returnValue(mockTasks);
    expect(fixture.nativeElement.querySelector('h4').textContent).toBe('Contact information');
  });
});

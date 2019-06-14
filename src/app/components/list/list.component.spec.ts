import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { MainService } from '../../main.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


import { ListComponent } from './list.component';
import { TasksComponent } from '../tasks/tasks.component';
import { mockDoctor } from 'src/app/testdata';

describe('ListComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let fixture: any;
  let app: any;
  let component: any;

  // setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ListComponent, TasksComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ MainService, ListComponent ],
      // schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    component = TestBed.get(ListComponent);
    fixture = TestBed.createComponent(ListComponent);
    app = fixture.debugElement.componentInstance;
    app.item = mockDoctor;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create List component', () => {
    expect(app).toBeTruthy();
  });

  it('should define Info', () => {
    expect(component.showInfo).toBeDefined();
  });

  it('should define Tasks', () => {
    expect(component.showTasks).toBeDefined();
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

  it('should set Tasks and Info to false', () => {
    component.toggleTasks();
    component.toggleInfo();
    expect(component.showTasks).toBeTruthy();
    expect(component.showInfo).toBeTruthy();
    component.toggleInfo();
    expect(component.showTasks).toBeFalsy();
    expect(component.showInfo).toBeFalsy();
  });
});

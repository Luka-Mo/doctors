import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MainService } from './main.service';
import { mockDoctor, mockTasks } from './testdata';
import { of } from 'rxjs';
import { TasksComponent } from './components/tasks/tasks.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  const mainService = jasmine.createSpyObj('MainService', ['doctors', 'tasks']);
  const getTasksSpy = mainService.tasks.and.returnValue ( of (mockTasks));
  const getDoctorsSpy = mainService.doctors.and.returnValue( of(mockDoctor) );
  // setup
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ AppComponent, ListComponent, TasksComponent ],
      providers: [ {provide: MainService, useValue: mainService }, AppComponent ],
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  // testing
  it('should create the app', () => {
    fixture.detectChanges();
    expect(fixture).toBeTruthy();
  });

});

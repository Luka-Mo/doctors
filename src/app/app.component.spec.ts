import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { MainService } from './main.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { mockDoctor } from './testdata';

describe('AppComponent', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  // setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ MainService, AppComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  afterEach(() => {
    httpTestingController.verify();
  });


  // testing
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.list = mockDoctor;
    expect(app).toBeTruthy();
  });

});

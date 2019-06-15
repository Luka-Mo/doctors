import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


import { MainService } from './main.service';


describe('MainService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);

  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create MainService', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service).toBeTruthy();
  });

  it('should define doctors', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service.doctors).toBeDefined();
  });

  it('should define tasks', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service.tasks).toBeDefined();
  });

});

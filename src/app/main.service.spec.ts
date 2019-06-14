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

  it('Should define doctors', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service.doctors).toBeDefined();
  });

  it('Should define tasks', () => {
    const service: MainService = TestBed.get(MainService);
    expect(service.tasks).toBeDefined();
  });

  it('Should return doctors as an object', () => {
    const service: MainService = TestBed.get(MainService);
    expect(typeof service.doctors).toBe('object');
  });

  it('Should return tasks as an object', () => {
    const service: MainService = TestBed.get(MainService);
    expect(typeof service.tasks).toBe('object');
  });
});

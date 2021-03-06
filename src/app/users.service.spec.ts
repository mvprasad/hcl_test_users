import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return users', () => {
    // TODO: Write test by using `httpMock`
    let users;
    service.getUsers().subscribe(resp => {
      users = resp;
      const req = httpMock.expectOne(`https://jsonplaceholder.typicode.com/users`);
      expect(req.request.method).toBe('GET');
      req.flush(users);
    });
  })
});

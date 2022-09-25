import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpInterseptorService } from './basic-auth-http-interseptor.service';

describe('BasicAuthHttpInterseptorService', () => {
  let service: BasicAuthHttpInterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHttpInterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

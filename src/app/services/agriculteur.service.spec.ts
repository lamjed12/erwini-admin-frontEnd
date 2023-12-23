import { TestBed } from '@angular/core/testing';

import { agriculteurService } from './agriculteur.service';

describe('agriculteurService', () => {
  let service: agriculteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(agriculteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

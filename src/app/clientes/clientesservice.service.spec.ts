import { TestBed, inject } from '@angular/core/testing';

import { ClientesserviceService } from './clientesservice.service';

describe('ClientesserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientesserviceService]
    });
  });

  it('should be created', inject([ClientesserviceService], (service: ClientesserviceService) => {
    expect(service).toBeTruthy();
  }));
});

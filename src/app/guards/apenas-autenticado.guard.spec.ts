import { TestBed, async, inject } from '@angular/core/testing';

import { ApenasAutenticadoGuard } from './apenas-autenticado.guard';

describe('ApenasAutenticadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApenasAutenticadoGuard]
    });
  });

  it('should ...', inject([ApenasAutenticadoGuard], (guard: ApenasAutenticadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});

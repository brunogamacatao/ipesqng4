import { TestBed, async, inject } from '@angular/core/testing';

import { ApenasAdminGuard } from './apenas-admin.guard';

describe('ApenasAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApenasAdminGuard]
    });
  });

  it('should ...', inject([ApenasAdminGuard], (guard: ApenasAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});

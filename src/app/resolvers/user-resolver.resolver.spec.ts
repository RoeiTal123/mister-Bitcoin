import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userResolver } from './user-resolver.resolver';
import { User } from '../models/user.model';

describe('userResolver', () => {
  const executeResolver: ResolveFn<User> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

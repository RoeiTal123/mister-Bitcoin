import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { delay } from 'rxjs';

export const userResolver: ResolveFn<User> = (route, state) => {
  const id = route.params['id']
  return inject(UserService).getUser()
};

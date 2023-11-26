import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';
import { delay } from 'rxjs';

export const contactResolverResolver: ResolveFn<Contact> = (route, state) => {
  const id = route.params['id']
  return inject(ContactService).getContactById(id).pipe(delay(100))
};

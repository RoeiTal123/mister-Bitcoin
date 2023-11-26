import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Subject, filter, map, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrl: './contactedit.component.scss',
})
export class ContacteditComponent implements OnInit, OnDestroy {
  private contactService = inject(ContactService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  destroySubject$ = new Subject<void>();

  contact = this.contactService.getEmptyContact();

  ngOnInit(): void {
    this.route.data
      .pipe(
        map((data) => data['contact']),
        filter((contact) => !!contact)
      )
      .subscribe((contact) => {
        this.contact = contact;
      })
  }

  //   onHandleDate(dateStr: string) {
  //     this.contact.birthDate = new Date(dateStr).getTime()
  // }

  onSaveContact() {
    this.contactService
      .saveContact(this.contact as Contact)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe({
        next: this.onBack,
        error: (err) => console.log('err:', err),
      })
  }

  onBack = () => {
    this.router.navigateByUrl('/contact');
  }

  ngOnDestroy(): void {}
}

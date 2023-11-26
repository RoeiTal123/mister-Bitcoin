import { Component , inject , OnDestroy,OnInit} from '@angular/core';
import { Observable } from 'rxjs'
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit,OnDestroy{

  contactService = inject(ContactService)

  contacts$! : Observable<Contact[]>

  private router = inject(Router);

  correctPath : boolean = true;

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    // console.log(this.router.url==='/contact')
    if (this.router.url!=='/contact'){
      this.correctPath=false
    } else {
      this.correctPath=true
    }
  }
  
  onRemoveContact(contactId: string) {
    this.contactService.deleteContact(contactId)
        .subscribe({
            error: err => console.log('err:', err)
        })
  }

  ngOnDestroy(): void {
    
  }
}

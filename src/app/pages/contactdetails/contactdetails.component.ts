import { Component , OnDestroy , OnInit, inject, Input, Output, EventEmitter} from '@angular/core';
import { Observable , map} from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrl: './contactdetails.component.scss'
})
export class ContactdetailsComponent implements OnInit, OnDestroy{
  
  @Output() change = new EventEmitter()
  
  contactService = inject(ContactService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  contacts$! : Observable<Contact[]>
  isOn : boolean = false

  contact: Contact | null = null
  contact$!: Observable<Contact>

  async ngOnInit(): Promise<void> {
    this.contacts$ = this.contactService.contacts$
    this.contact$ = this.route.data.pipe(map(data => data['contact']))
  }

  ngOnDestroy(): void {
    
  }
}

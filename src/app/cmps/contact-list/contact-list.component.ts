import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  // @Input () changeModalState!:any | null

  @Input () contacts!:Contact[] | null

  @Output() change = new EventEmitter()
  @Output() remove = new EventEmitter()
  
}

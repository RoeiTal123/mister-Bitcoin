import { Component, EventEmitter, Input, Output, OnInit, inject } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { Router } from '@angular/router';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss'
})
export class ContactPreviewComponent implements OnInit{

  @Input () contact!: Contact 

  @Output() change = new EventEmitter()
  @Output() remove = new EventEmitter()

  private router = inject(Router);

  isCorrectPath : boolean = true;

  ngOnInit(): void {
    this.onRefreshPath()
  }

  onRefreshPath(){
    if (this.router.url!=='/contact'){
      this.isCorrectPath=false
    } else {
      this.isCorrectPath=true
    }
  }

  onRemoveContact() {
      this.remove.emit(this.contact._id)
  }

  workerUrl='assets/worker.png'

}

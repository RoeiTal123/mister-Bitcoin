import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './cmps/input/input.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactFilterComponent } from './cmps/ContactFilter/contact-filter.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContacteditComponent } from './pages/contactedit/contactedit.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ProfilepageComponent } from './pages/profilepage/profilepage.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ContactPreviewComponent,
    ContactFilterComponent,
    ContactListComponent,
    HomepageComponent,
    ContactComponent,
    ContacteditComponent,
    ContactdetailsComponent,
    HeaderComponent,
    ProfilepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

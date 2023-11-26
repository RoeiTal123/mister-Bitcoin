import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactdetailsComponent } from './pages/contactdetails/contactdetails.component';
import { contactResolverResolver } from './resolvers/contact-resolver.resolver';
import { ContacteditComponent } from './pages/contactedit/contactedit.component';

const routes: Routes = [
  {path: 'details/:id', component:ContactdetailsComponent, resolve: { contact : contactResolverResolver } },

  {path: 'contact', component:ContactComponent, children: [
    // { path: ':id', component: ContactdetailsComponent, resolve: { contact: contactResolverResolver } },
    { path: 'edit/:id', component: ContacteditComponent, resolve: { contact : contactResolverResolver } },
    { path: 'edit', component: ContacteditComponent }
  ]},
  {path: '', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

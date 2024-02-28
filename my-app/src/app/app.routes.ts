
import { Routes } from '@angular/router'
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { HomeComponent } from '../components/home/home.component';
import { ContactdetailsComponent } from '../components/contactdetails/contactdetails.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contact/details', component: ContactdetailsComponent },
    { path: '**', redirectTo: 'contact' }
    
];


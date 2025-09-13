import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
import { Stories } from '../pages/stories/stories';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'stories', component: Stories },
];

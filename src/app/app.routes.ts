import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
import { Posts } from '../pages/posts/posts';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'blog', component: Posts }
];

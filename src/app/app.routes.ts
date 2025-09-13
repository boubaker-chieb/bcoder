import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
import { Blog } from '../pages/blog/blog';
import { Projects } from '../pages/projects/projects';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'blog', component: Blog },
    { path: 'projects', component: Projects }
];

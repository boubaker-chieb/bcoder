import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
import { Stories } from '../pages/stories/stories';
import { Story } from '../pages/stories/story/story';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'contact', component: Contact },
    { path: 'stories', component: Stories },
    { path: 'stories/:id', component: Story },
];

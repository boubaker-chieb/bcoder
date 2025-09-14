import { Component } from '@angular/core';
import { PageTitle } from '../../shared/pageTitle/pageTitle';
import { StoriesList } from './stories-list/stories-list';

@Component({
  selector: 'app-stories',
  imports: [PageTitle, StoriesList],
  templateUrl: './stories.html',
  styleUrl: './stories.scss'
})
export class Stories {
}

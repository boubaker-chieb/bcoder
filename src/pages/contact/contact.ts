import { Component } from '@angular/core';
import { PageTitle } from '../../core/pageTitle/pageTitle';

@Component({
  selector: 'app-contact',
  imports: [PageTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  public contacts = [
  {
    icon: 'github-icon',
    alt: 'github icon',
    link: 'https://github.com/boubaker-chieb',
  },
  {
    icon: 'linkedin-icon',
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/boubaker-chieb-726b11187/?locale=en_US',
  },
  {
    icon: 'envelope-icon',
    alt: 'envelope icon',
    link: 'mailto:boubaker.ch@outlook.fr',
  },
]
}

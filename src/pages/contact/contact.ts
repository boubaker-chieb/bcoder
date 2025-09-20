import { Component } from '@angular/core';
import { PageTitle } from '../../shared/pageTitle/pageTitle';

@Component({
  selector: 'app-contact',
  imports: [PageTitle],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  public contacts = [
  {
    icon: 'whatsapp-icon',
    alt: 'whatsapp icon',
    link: 'https://wa.me/33616805191',
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
  {
    icon: 'by-me-coffee-icon',
    alt: 'by me coffee icon',
    link: 'https://www.buymeacoffee.com/boubakerchieb',
  },
]
}

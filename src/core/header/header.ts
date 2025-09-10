import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public navItems: { label: string; page?: string; link?: string }[] = [
    { label: 'Home', page: '/' },
    { label: 'Contact', page: '/contact' },
    // { label: 'Blog', page: '/blog' },
    { label: 'Source Code', link: 'https://github.com/boubaker-chieb' },
  ];
}

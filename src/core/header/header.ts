import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeStore } from '../stores/theme-store';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public navItems: { label: string; page?: string; link?: string; }[] = [
    { label: 'Home', page: '/' },
    { label: 'Contact', page: '/contact' },
    { label: 'Blog', page: '/blog' },
    { label: 'Projects', page: '/projects' }
  ];
  constructor(public themeStore: ThemeStore) {}
  toggleTheme() {
    this.themeStore.toggleTheme();
  }
}

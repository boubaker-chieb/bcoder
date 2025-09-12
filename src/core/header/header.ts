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
  public navItems: { label: string; page?: string; link?: string; icon?: string }[] = [
    { label: 'Home', page: '/', icon: '/public/svgs/home-icon.svg' },
    { label: 'Contact', page: '/contact', icon: '/public/svgs/contact-icon.svg' },
  ];
  constructor(public themeStore: ThemeStore) {}
  toggleTheme() {
    this.themeStore.toggleTheme();
  }
}

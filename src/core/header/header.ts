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
  public isNavOpen: WritableSignal<boolean> = signal(false);
  public navItems: { label: string; page?: string; link?: string; }[] = [
    { label: 'Home', page: '/' },
    // { label: 'Stories', page: '/stories' },
    { label: 'Contact', page: '/contact' },
  ];
  constructor(public themeStore: ThemeStore) {}
  toggleTheme() {
    this.themeStore.toggleTheme();
  }
}

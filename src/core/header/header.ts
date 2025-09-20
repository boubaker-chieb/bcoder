import { Component, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeStore } from '../stores/theme-store';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public isNavOpen: WritableSignal<boolean> = signal(false);
  public navItems: { label: string; page?: string; link?: string; isExternal?: boolean }[] = [
    { label: 'Home', page: '/' },
    // { label: 'Stories', page: '/stories' },
    { label: 'Contact', page: '/contact', isExternal: false },
    { label: 'Github ', link: 'https://github.com/boubaker-chieb', isExternal: true },
  ];
  constructor(public themeStore: ThemeStore) {}
  toggleTheme() {
    this.themeStore.toggleTheme();
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeStore {
  private _isDarkMode = signal(false);
  readonly isDarkMode = this._isDarkMode.asReadonly();

  toggleTheme() {
    this._isDarkMode.update((v) => !v);
    document.body.classList.toggle('dark-theme', this._isDarkMode());
  }
}

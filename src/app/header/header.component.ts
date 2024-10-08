import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu: boolean = false;
  theme: string = 'light';

  @Output() scrollVar = new EventEmitter<string>();
  onScroll(val: string) {
    this.scrollVar.emit(val);
  }

  @Output() themeChange = new EventEmitter<string>();
  onThemeChange() {
    this.themeChange.emit(this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.onThemeChange();
  }
  openMenu() {
    this.showMenu = true;
    document.body.style.overflow = 'hidden';
  }
  closeMenu() {
    document.getElementsByClassName('mobile-menu').item(0)?.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(100%)' }
    ], {
      duration: 300,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
    setTimeout(() => {
      this.showMenu = false;
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

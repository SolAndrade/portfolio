import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavItemHovered = false;

  onNavItemHover(itemId: string): void {
    const hoveredItem = document.getElementById(itemId);
    const nav = document.getElementById('nav');

    if (hoveredItem && nav) {
      nav.classList.add('background');
    }
  }

  handleUnhover(): void {
    const nav = document.getElementById('nav');
    
    if (nav) {
      nav.classList.remove('background');
    }
  }
}

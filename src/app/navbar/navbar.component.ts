import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavItemHovered = false;
  isHovered: boolean = false;

  constructor(private router: Router) {}


  onHover(): void {
    this.isHovered = true;
  }

  onLeave(): void {
    this.isHovered = false;
  }

  /*onNavItemHover(itemId: string): void {
    const hoveredItem = document.getElementById(itemId);
    const nav = document.getElementById('nav');

    if (hoveredItem && nav) {
      nav.classList.add('background');
      setTimeout(() => {
        this.router.navigate([`/${itemId}`]);
      }, 1000);
    }
  }*/

  /*handleUnhover(): void {
    const nav = document.getElementById('nav');
    
    if (nav) {
      nav.classList.remove('background');
    }
  }*/
}

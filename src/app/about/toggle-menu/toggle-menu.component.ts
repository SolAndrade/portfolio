import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent {
  menuActive = true;

  constructor() { }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}

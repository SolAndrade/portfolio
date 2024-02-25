import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './title.component.css']
})
export class NavbarComponent{
  @Input() isWhite!: boolean;

  constructor() {}

}

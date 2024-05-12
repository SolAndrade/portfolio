import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isWhite!: boolean;
  @Output() menu: EventEmitter<any> = new EventEmitter<any>();

  openCloseMenu() {
    this.menu.emit();
  }
}

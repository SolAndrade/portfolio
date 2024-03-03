import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './title.component.css']
})
export class NavbarComponent {
  textShown = null;
  hideTitle = false;
  @Input() isWhite!: boolean;

  @Output() pageRedirect: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    private _router: Router
  ) { }

  emitRedirection(page: any) {
    const currentUrl = this._router.url;
    const currentEndpoint = currentUrl.split('/').pop();
    const redirectToEndpoint = page.split('/').pop();
    if (currentEndpoint === redirectToEndpoint) {
      return;
    }
    this.textShown = page;
    setTimeout(() => {
      this.hideTitle = true;
    }, 3500);
    this.pageRedirect.emit(page);
  }
}

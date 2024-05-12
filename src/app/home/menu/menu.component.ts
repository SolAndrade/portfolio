import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() pageRedirect: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  emitRedirection(page: any) {
    const currentUrl = this._router.url;
    const currentEndpoint = currentUrl.split('/').pop();
    const redirectToEndpoint = page.split('/').pop();
    if (currentEndpoint === redirectToEndpoint) {
      return;
    }
    this.pageRedirect.emit(page);
  }

}

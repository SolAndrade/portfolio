import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './responsive.css']
})
export class ContactComponent implements OnInit {
  //contactGif = './assets/img/home-girl.gif';
  contactGif = './assets/img/home-color2.gif';

  isAnimationActive: any;
  displayNav = false;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.isAnimationActive = true;
    setTimeout(() => {
      this.isAnimationActive = false;
    }, 50);
    setTimeout(() => {
      this.displayNav = true;
    }, 1000);
  }

  redirectNav(page: any) {
    if (page === '/contact') {
      return;
    }
    this.isAnimationActive = true;
    setTimeout(() => {
      this._router.navigate([page]);
    }, 2500);
  }
}

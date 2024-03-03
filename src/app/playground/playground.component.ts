import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  img = './assets/img/playground.gif';

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
    if (page === '/playground') {
      return;
    }
    this.isAnimationActive = true;
    setTimeout(() => {
      this._router.navigate([page]);
    }, 2500);
  }
}

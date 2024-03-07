import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  img = './assets/img/playground.gif';
  pixel = 'https://tracker.metricool.com/c3po.jpg?hash=3d3cb2aef5b0cf00957091f44722546e';
  isAnimationActive = false;

  constructor(
    private _router: Router,
  ){}

  redirectNav(page: any){
    this.isAnimationActive = true;
    setTimeout(() => {
      this._router.navigate([page]);
    }, 2500);
  }
}

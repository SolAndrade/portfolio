import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './responsive.css']
})
export class HomeComponent {
  img = './assets/img/playground.gif';
  pixel = 'https://tracker.metricool.com/c3po.jpg?hash=3d3cb2aef5b0cf00957091f44722546e';
  isAnimationActive = false;
  isMenuAnimationActive = false;

  constructor(
    private _router: Router,
    private _elRef: ElementRef,
    private renderer: Renderer2,
  ){}

  redirectNav(page: any){
    this.isAnimationActive = true;
    setTimeout(() => {
      this._router.navigate([page]);
    }, 2500);
  }

  redirectMenu(page: any){
    this._router.navigate([page]);
  }

  showMenu() {
    this.isMenuAnimationActive = !this.isMenuAnimationActive;
  }
}

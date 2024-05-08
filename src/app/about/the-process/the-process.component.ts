import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-process',
  templateUrl: './the-process.component.html',
  styleUrls: ['./the-process.component.css']
})
export class TheProcessComponent implements OnInit {
  stepNbr = 1;
  constructor() { }

  ngOnInit() {
  }

  changeStep(nbr: number): void {
    this.stepNbr = nbr;
  }

}

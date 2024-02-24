import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationPlayer, AnimationBuilder } from '@angular/animations';
import { WorksService } from '../services/works.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent implements OnInit {
  projects2023: any[] = [];
  projects2022: any[] = [];
  projectsDisplay: any[] = [];

  year = 2023;

  @ViewChild('titleContainer') titleContainer: any;

  titleBegin: string = 'My';
  titleEnd: string = 'Works';

  constructor(
    private animationBuilder: AnimationBuilder,
    private worksService: WorksService,
    private renderer: Renderer2,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.data.subscribe(data => {
      this.projects2023 = data['projectsData'].projects2023;
      this.projects2022 = data['projectsData'].projects2022;
    });
    /*setTimeout(() => {
      this.loader = false;
      this.toggleAnimation();
    }, 2000);*/
  }

  updateDisplay(year: number) {
    this.year = year;
  }

  handleHover(imageId: string): void {
    const images = document.querySelectorAll('.img');

    if (images) {
      images.forEach(img => {
        if (img.id === imageId) {
          this.renderer.removeClass(img, 'grayscale');
          this.updateTitle(imageId);
        } else {
          this.renderer.addClass(img, 'grayscale');
        }
      });
    }
  }

  handleUnhover(): void {
    const images = document.querySelectorAll('.img');

    if (images) {
      images.forEach(img => {
        this.renderer.removeClass(img, 'grayscale');
        this.titleBegin = 'My';
        this.titleEnd = 'Works';
      });
    }
  }

  private updateTitle(imageId: string): void {
    switch (imageId) {
      case 'img42':
        this.titleBegin = '42';
        this.titleEnd = 'OpenCyber';
        break;
      case 'imgOpenTechies':
        this.titleBegin = 'Open';
        this.titleEnd = 'Techies';
        break;
      case 'imgFireWatcher':
        this.titleBegin = 'Fire';
        this.titleEnd = 'Watcher';
        break;
      case 'imgAbsences system':
        this.titleBegin = 'H';
        this.titleEnd = 'ickathon';
        break;
      case 'imgReBranding':
        this.titleBegin = 'Re';
        this.titleEnd = 'Branding';
        break;
      default:
        break;
    }
  }
}

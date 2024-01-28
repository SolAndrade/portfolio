import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationPlayer, AnimationBuilder } from '@angular/animations';
import { WorksService } from '../services/works.service';


@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css']
})
export class MyWorksComponent implements OnInit {
  projects2023: any[] = [];
  projects2022: any[] = [];

  @ViewChild('titleContainer') titleContainer: any;

  titleBegin: string = 'My';
  titleEnd: string = 'Works';

  constructor(
    private animationBuilder: AnimationBuilder,
    private worksService: WorksService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.worksService.getWorks2023().subscribe((data: any[]) => {
      this.projects2023 = data;
    });
    this.worksService.getWorks2022().subscribe((data: any[]) => {
      this.projects2022 = data;
    });
    /*setTimeout(() => {
      this.loader = false;
      this.toggleAnimation();
    }, 2000);*/
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

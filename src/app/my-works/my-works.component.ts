import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationPlayer, AnimationBuilder } from '@angular/animations';
import { WorksService } from '../services/works.service';


@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css'],
  animations: [
    trigger('titleAnimation', [
      state('void', style({ transform: 'translateY(100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition('void => *', animate('500ms ease-in-out')),
      transition('* => void', animate('300ms ease-in-out'))
    ])
  ]
})
export class MyWorksComponent implements OnInit{
  projects2023: any[] = [];
  projects2022: any[] = [];

  @ViewChild('titleContainer') titleContainer: any;
  
  private titleAnimationPlayer: AnimationPlayer | undefined;

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
      case 'imgHickathon':
        this.titleBegin = 'H';
        this.titleEnd = 'ickathon';
        break;
      default:
        break;
    }
  }
}

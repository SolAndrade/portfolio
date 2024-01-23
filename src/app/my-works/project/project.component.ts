import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('navbarAnimation', [
      state('visible', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
      transition('visible => hidden', animate('600ms ease-out')),
      transition('hidden => visible', animate('300ms ease-in')),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  navbarState = 'visible';
  project: any;
  currentImageIndex = 0;
  showMainInfo = true;
  activeRightButton = true;
  activeLeftButton = false;
  projectDescriptionTxt = false;
  projectRoleDescriptionTxt = false;


  constructor(
    private route: ActivatedRoute,
    private worksService: WorksService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.worksService.getWorks2023().subscribe((data: any[]) => {
        this.project = data.find((project) => project.titleHeading === projectId);
      });
    });
  }

  changeImage(index: number) {
    const isVisible = this.navbarState === 'visible';
    const isHidden = this.navbarState === 'hidden';
    (index === 1 && isVisible) || (index === -1 && isHidden) ? this.toggleNavbarAnimation() : null;
    this.currentImageIndex = (this.currentImageIndex + index + this.project.images.length) % this.project.images.length;
    this.showMainInfo = this.currentImageIndex === 0;
    this.projectDescriptionTxt = this.currentImageIndex === 1;
    this.projectRoleDescriptionTxt = this.currentImageIndex === 2;
  }

  toggleNavbarAnimation() {
    this.navbarState = (this.navbarState === 'visible') ? 'hidden' : 'visible';
  }

}

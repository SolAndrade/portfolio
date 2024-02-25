import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
import { JsonResponse, Project } from 'src/app/models/project.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    slideInAnimation,
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
    trigger('imageSlide', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1000ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  navbarState = 'visible';
  project!: Project | undefined;
  currentImageIndex = 0;
  showMainInfo = true;
  activeRightButton = true;
  activeLeftButton = false;
  projectDescriptionTxt = false;
  projectRoleDescriptionTxt = false;
  projectsRoute = './assets/data/works/works.json';

  navLeftButton = './assets/img/buttons/left-button.png';
  navExitButton = './assets/img/buttons/exit-button.png'
  navRightButton = './assets/img/buttons/right-button.png'

  projectLogo: any;
  projectImages!: Project['images'];

  constructor(
    private route: ActivatedRoute,
    private worksService: WorksService,
    private _http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this._http.get<any>(this.projectsRoute).subscribe((data: JsonResponse) => {
        this.project = data.works2023.find((project: { titleHeading: any; }) => project.titleHeading === projectId);
        if (this.project) {
          this.projectLogo = this.project.logo;
          this.projectImages = this.project.images;
        }
      });
    });

  }

  changeImage(index: number) {
    const isVisible = this.navbarState === 'visible';
    const isHidden = this.navbarState === 'hidden';
    (index === 1 && isVisible) || (index === -1 && isHidden) ? this.toggleNavbarAnimation() : null;

    if (this.project) {
      this.currentImageIndex = (this.currentImageIndex + index + this.project.images.length) % this.project.images.length;
      this.showMainInfo = this.currentImageIndex === 0;
      this.projectDescriptionTxt = this.currentImageIndex === 1;
      this.projectRoleDescriptionTxt = this.currentImageIndex === 2;
    }
  }


  toggleNavbarAnimation() {
    this.navbarState = (this.navbarState === 'visible') ? 'hidden' : 'visible';
  }

}

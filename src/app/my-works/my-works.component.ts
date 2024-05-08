import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationPlayer, AnimationBuilder } from '@angular/animations';
import { WorksService } from '../services/works.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css', './responsive.css', './animations.css']
})
export class MyWorksComponent implements OnInit {
  projects2024: Project[] = [];
  projects2023: Project[] = [];
  projects2022: Project[] = [];
  projectsDisplay: any[] = [];
  projects: any;
  projectsRoute = './assets/data/works/works.json';

  year = 2024;

  @ViewChild('titleContainer') titleContainer: any;

  titleBegin: string = 'My';
  titleEnd: string = 'Works';

  isAnimationActive: any;
  layerProjects = false;
  displayNav = false;

  constructor(
    private animationBuilder: AnimationBuilder,
    private _worksService: WorksService,
    private renderer: Renderer2,
    private _route: ActivatedRoute,
    private _http: HttpClient,
    private _router: Router,
    private _elRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this._http.get<any>(this.projectsRoute).subscribe(data => {
      this.projects = data;
      this.projects2024 = data.works2024;
      this.projects2023 = data.works2023;
      //this.projects2022 = data.works2022;
    });
    this.isAnimationActive = true;
    setTimeout(() => {
      this.isAnimationActive = false;
    }, 50);
    setTimeout(() => {
      this.displayNav = true;
    }, 1000);
    setTimeout(() => {
      const worksIndexElement = this._elRef.nativeElement.querySelector('.works-index');
      if (worksIndexElement) {
        this.renderer.setStyle(worksIndexElement, 'z-index', '5');
      }
    }, 1000);

  }

  redirectNav(page: any) {
    if (page === '/works') {
      return;
    }
    this.isAnimationActive = true;
    const worksIndexElement = this._elRef.nativeElement.querySelector('.works-index');
    if (worksIndexElement) {
      this.renderer.setStyle(worksIndexElement, 'z-index', '0');
    }
    setTimeout(() => {
      this._router.navigate([page]);
    }, 2500);
  }

  updateDisplay(year: number) {
    this.year = year;
  }

  handleHover(imageId: string, project: string): void {
    const images = document.querySelectorAll('.img');

    if (images) {
      images.forEach(img => {
        if (img.id === imageId) {
          this.renderer.removeClass(img, 'grayscale');
          this.updateTitle(project);
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

  private updateTitle(projectTitle: string): void {
    for (const year in this.projects) {
      if (this.projects.hasOwnProperty(year)) {
        const projects = this.projects[year];
        const project = projects.find((p: Project) => p.titleHeading === projectTitle);
        if (project) {
          this.titleBegin = project.titleBegin;
          this.titleEnd = project.titleEnd;
          break;
        }
      }
    }
  }
}

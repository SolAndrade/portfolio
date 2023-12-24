import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: any;
  currentImageIndex = 0;
  showMainInfo = true;


  constructor(
    private route: ActivatedRoute,
    private worksService: WorksService,
    private router: Router,
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
    this.currentImageIndex = (this.currentImageIndex + index + this.project.images.length) % this.project.images.length;
    if(this.currentImageIndex === 0) {
      this.showMainInfo = true;
    } else {
      this.showMainInfo = false;
    }
  }

}

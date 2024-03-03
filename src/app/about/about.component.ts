import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutMeImg = './assets/img/about-me.png';
  cv = './assets/data/CV Sol Andrade.pdf';
  arrowDiagonal = './assets/img/buttons/arrow-diagonal.png';
  isAnimationActive: any;
  displayNav = false;

  topSkills: string[] = [
    "WEB DESIGN",
    "FRONTEND DEVELOPMENT",
    "GRAPHIC DESIGN",
    "BRAND DESIGN",
    "SOFTWARE DEVELOPMENT",
    "BRAND VISUAL STRATEGY",
    "APPLICATION DEVELOPMENT",
    "UX/UI",
    "INTERACTION DESIGN",
    "DIGITAL INTERFACE DESIGN",
    "WEB DEVELOPMENT",
    "FULLSTACK DEVELOPMENT",
    "PROGRAMMING",
  ];

  hardSkills: string[] = [
    "ANGULAR",
    "HTML",
    "TYPESCRIPT",
    "CSS",
    "JAVA",
    "GITHUB",
    "REACT",
    "SPRINGBOOT",
    "JAVASCRIPT",
    "SCRUM",
    "ADOBE PHOTOSHOP",
    "API RESTFUL",
    "FIGMA",
    "PYTHON",
    "TRELLO",
    "ARDUINO",
    "ADOBE ILLUSTRATOR",
    "C",
    "POSTMAN",
    "CANVA",
    "POSTGRESQL",
    "C#",
    "UNIT TESTING",
    "GIT",
    "AWS INFRASTRUCTURE",
    "MYSQL",
    "ADOBE CREATIVE SUITE",
    "UNITY",
    "JIRA"
  ]

  topSkillsDisplay!: string[];
  hardSkillsDisplay!: string[];

  constructor(
    private _router: Router,
  ) {
    this.topSkillsDisplay = this.topSkills.concat(this.topSkills);
    this.topSkillsDisplay = this.topSkillsDisplay.concat(this.topSkillsDisplay);

    this.hardSkillsDisplay = this.hardSkills.concat(this.hardSkills);
  }

  ngOnInit(): void {
    this.isAnimationActive = true;
    setTimeout(() => {
      this.isAnimationActive = false;
    }, 50);
    setTimeout(() => {
      this.displayNav = true;
    }, 1000);
  }

  redirectNav(page: any) {
    if (page === '/about') {
      return;
    }
    this.isAnimationActive = true;
    setTimeout(() => {
      this._router.navigate([page]);
    }, 2500);
  }
}

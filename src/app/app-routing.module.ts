import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './my-works/project/project.component';
import { MyWorksComponent } from './my-works/my-works.component';

const routes: Routes = [
  { path: 'portfolio', component: HomeComponent },
  { path: 'portfolio/home', component: HomeComponent },
  { path: 'portfolio/works', component: MyWorksComponent },
  { path: 'portfolio/about', component: AboutComponent },
  { path: 'portfolio/playground', component: PlaygroundComponent },
  { path: 'portfolio/contact', component: ContactComponent },
  { path: 'portfolio/projects/:id', component: ProjectComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

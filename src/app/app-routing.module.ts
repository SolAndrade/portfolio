import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './my-works/project/project.component';
import { MyWorksComponent } from './my-works/my-works.component';
import { ProjectsResolver } from './router/resolver/projects.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'works',
    component: MyWorksComponent,
    resolve: {
      projectsData: ProjectsResolver,
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

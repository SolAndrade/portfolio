import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './my-works/project/project.component';
import { MyWorksComponent } from './my-works/my-works.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animationState: 'HomePage' } },
  { path: 'home', component: HomeComponent, data: { animationState: 'HomePage' } },
  { path: 'works', component: MyWorksComponent, data: { animationState: 'WorksPage' }  },
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

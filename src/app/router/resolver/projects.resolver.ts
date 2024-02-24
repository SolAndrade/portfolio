import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs';
import { WorksService } from 'src/app/services/works.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolver implements Resolve<any> {

  constructor(private _worksService: WorksService) {}

  /*resolve() {
    return this._worksService.getWorks();
  }*/

  resolve() {
    return this._worksService.getWorks().pipe(
      map((data: any) => ({
        projects2023: data.works2023,
        projects2022: data.works2022
      }))
    );
  }
}

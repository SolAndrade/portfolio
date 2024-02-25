import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private works = '../../assets/data/works/works.json';

  constructor(private http: HttpClient) {}

  /*getWorks(): Observable<any[]> {
    return this.http.get<any[]>(this.works);
  }*/

}

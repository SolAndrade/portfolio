import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private works2023 = '../../assets/data/works/works-2023.json';
  private works2022 = '../../assets/data/works/works-2022.json';
  private works = '../../assets/data/works/works.json';

  constructor(private http: HttpClient) {}

  getWorks2023(): Observable<any[]> {
    return this.http.get<any[]>(this.works2023);
  }

  getWorks2022(): Observable<any[]> {
    return this.http.get<any[]>(this.works2022);
  }

  getWorks(): Observable<any[]> {
    return this.http.get<any[]>(this.works);
  }

}

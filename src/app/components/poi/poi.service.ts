import { Poi } from './poi.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  private baseUrl = 'http://localhost:8080/pois';

  constructor(private http: HttpClient) { }

  read(): Observable<Poi[]> {

    return this.http.get<Poi[]>(this.baseUrl);

  }
}

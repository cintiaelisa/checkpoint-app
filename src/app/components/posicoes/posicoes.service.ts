import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posicao } from './posicao.model';

@Injectable({
  providedIn: 'root'
})
export class PosicoesService {

  private baseUrl = 'http://localhost:8080/posicoes';

  constructor(private http: HttpClient) {  }

  read(): Observable<Posicao[]> {

    return this.http.get<Posicao[]>(this.baseUrl);

  }
  
}

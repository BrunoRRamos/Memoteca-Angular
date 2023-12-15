import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDTO } from './CardDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(): Observable<CardDTO[]> {
    return this.http.get<CardDTO[]>(this.API);
  }

  create(pensamento: CardDTO): Observable<CardDTO> {
    return this.http.post<CardDTO>(this.API, pensamento);
  }

  put(card: CardDTO): Observable<CardDTO> {
    const url = `${this.API}/${card.id}`;
    return this.http.put<CardDTO>(url, card);
  }

  delete(id: number): Observable<CardDTO> {
    const url = `${this.API}/${id}`;
    return this.http.delete<CardDTO>(url);
  }

  getById(id: number): Observable<CardDTO> {
    const url = `${this.API}/${id}`;
    return this.http.get<CardDTO>(url);
  }
}

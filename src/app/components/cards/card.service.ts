import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CardDTO } from './CardDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<CardDTO[]> {
    const itemPorPagina = 6;
    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itemPorPagina);

    if (filtro.trim().length > 1) {
      params = params.set('q', filtro);
    }

    if(favoritos) {
      params = params.set("favorito", true);
    }

    return this.http.get<CardDTO[]>(this.API, { params });
  }

  create(pensamento: CardDTO): Observable<CardDTO> {
    return this.http.post<CardDTO>(this.API, pensamento);
  }

  put(card: CardDTO): Observable<CardDTO> {
    const url = `${this.API}/${card.id}`;
    return this.http.put<CardDTO>(url, card);
  }

  mudarFavorito(pensamento: CardDTO): Observable<CardDTO> {
    pensamento.favorito = !pensamento.favorito;
    return this.put(pensamento);
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

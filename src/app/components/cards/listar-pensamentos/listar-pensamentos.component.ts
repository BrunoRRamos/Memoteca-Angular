import { Component, OnInit } from '@angular/core';
import { CardDTO } from '../CardDTO';
import { CardService } from '../card.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos: CardDTO[] = [];
  paginaAtual: number = 1;
  loadPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: CardService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((cardList) => {
      this.listaPensamentos = cardList;
    });
  }

  loadMorePensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (!listaPensamentos.length) {
          this.loadPensamentos = false;
        }
      });
  }

  searchPensamentos() {
    this.loadPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      })
  }
}

import { Component, OnInit } from '@angular/core';
import { CardDTO } from '../CardDTO';
import { CardService } from '../card.service';
import { Route, Router } from '@angular/router';

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
  favoritos: boolean = false;
  listaFavoritos: CardDTO[] = [];
  titulo: string = 'Meu Mural';

  constructor(
    private service: CardService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((cardList) => {
      this.listaPensamentos = cardList;
    });
  }

  loadMorePensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favoritos)
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
    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  getAllFavoritos() {
    this.titulo = 'Meus Favoritos';
    this.paginaAtual = 1;
    this.loadPensamentos = true;
    this.favoritos = true;

    this.service
      .listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
              this.listaFavoritos = pensamentos;
      });
  }

  reloadComponent() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}

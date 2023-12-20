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

  constructor(private service: CardService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((cardList) => {
      this.listaPensamentos = cardList;
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Treiando Angular',
      autoria: 'EU',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Testando *ngFor',
      autoria: 'EU',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

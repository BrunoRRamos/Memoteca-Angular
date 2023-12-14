import { CardService } from '../card.service';
import { CardDTO } from './../CardDTO';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() pensamento: CardDTO = {
    id: 0,
    conteudo: 'Treiando Angular',
    autoria: 'EU',
    modelo: 'modelo3',
  };

  constructor() {}

  ngOnInit(): void {}
}

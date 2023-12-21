import { Component, OnInit } from '@angular/core';
import { CardDTO } from '../CardDTO';
import { CardService } from '../card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exluir-card',
  templateUrl: './exluir-card.component.html',
  styleUrls: ['./exluir-card.component.css'],
})
export class ExluirCardComponent implements OnInit {
  card: CardDTO = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  };

  constructor(
    private service: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(parseInt(id!)).subscribe((card) => {
      this.card = card;
    });
  }

  excluirPensamento() {
    if (this.card.id) {
      this.service.delete(this.card.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    } else {
      alert('Deu BO')
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}

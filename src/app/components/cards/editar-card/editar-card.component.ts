import { Component, OnInit } from '@angular/core';
import { CardDTO } from '../CardDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-editar-card',
  templateUrl: './editar-card.component.html',
  styleUrls: ['./editar-card.component.css']
})
export class EditarCardComponent implements OnInit {

  pensamento: CardDTO = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: CardService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  editar() {
    this.service.put(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

}

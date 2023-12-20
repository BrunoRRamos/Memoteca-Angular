import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-editar-card',
  templateUrl: './editar-card.component.html',
  styleUrls: ['./editar-card.component.css'],
})
export class EditarCardComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: CardService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(parseInt(id!)).subscribe((pensamento) => {
      this.form = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [
          pensamento.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        autoria: [
          pensamento.autoria,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        modelo: [pensamento.modelo],
      });
    });
  }

  editar() {
    this.service.put(this.form.value).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

  habilitarBotao(): string {
    if (this.form.valid) {
      return 'botao';
    } 
    return 'botao__desabilitado';
  }
}

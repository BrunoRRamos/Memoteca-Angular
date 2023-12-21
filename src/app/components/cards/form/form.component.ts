import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: CardService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.minLength(3),
        ]),
      ],
      modelo: ['modelo1'],
      favorito: [false]
    });
  }

  submmit() {
    console.log(this.form.get('autoria')?.errors);
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
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

import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  form: FormGroup = {

  }

  constructor(
    private service: CardService, 
    private router: Router
    ) {}

  ngOnInit(): void {}

  submmit() {
    this.service.create(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    });
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    pensamento = {
        id: '1',
        conteudo: 'Aprendendo Angular',
        autoria: 'Dev',
        modelo: 'Modelo 1',
    };

    constructor() {}

    ngOnInit(): void {}

    submmit() {
      alert('Novo pensamento criado !')
    }
}

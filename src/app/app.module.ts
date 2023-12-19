import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/cards/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarPensamentosComponent } from './components/cards/listar-pensamentos/listar-pensamentos.component';
import { CardComponent } from './components/cards/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ExluirCardComponent } from './components/cards/excluir-card/exluir-card.component';
import { EditarCardComponent } from './components/cards/editar-card/editar-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ListarPensamentosComponent,
    CardComponent,
    ExluirCardComponent,
    EditarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

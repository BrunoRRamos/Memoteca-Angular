import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/cards/form/form.component';
import { ListarPensamentosComponent } from './components/cards/listar-pensamentos/listar-pensamentos.component';
import { ExluirCardComponent } from './components/cards/excluir-card/exluir-card.component';
import { EditarCardComponent } from './components/cards/editar-card/editar-card.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
    },
    {
        path: 'criarPensamento',
        component: FormComponent,
    },
    {
        path: 'listarPensamento',
        component: ListarPensamentosComponent,
    },
    {
        path: 'pensamentos/excluirPensamento/:id',
        component: ExluirCardComponent
    },
    {
        path: 'pensamentos/editarPensamento/:id',
        component: EditarCardComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/cards/form/form.component';
import { ListarPensamentosComponent } from './components/cards/listar-pensamentos/listar-pensamentos.component';

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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

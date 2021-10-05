import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosReadComponent } from './views/components/contatos/contatos-read/contatos-read.component';
import { HomeComponent } from './views/components/home/home.component';

const routes: Routes = [ 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contatos',
    component: ContatosReadComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

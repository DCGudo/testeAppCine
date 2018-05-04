import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesDetalhePage } from './filmes-detalhe';

@NgModule({
  declarations: [
    FilmesDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesDetalhePage),
  ],
})
export class FilmesDetalhePageModule {}

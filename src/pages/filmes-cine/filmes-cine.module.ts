import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmesCinePage } from './filmes-cine';

@NgModule({
  declarations: [
    FilmesCinePage,
  ],
  imports: [
    IonicPageModule.forChild(FilmesCinePage),
  ],
})
export class FilmesCinePageModule {}

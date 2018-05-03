import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmesProvider } from '../../providers/filmes/filmes';

/**
 * Generated class for the FilmesCinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes-cine',
  templateUrl: 'filmes-cine.html',
  providers:[FilmesProvider]
})
export class FilmesCinePage {

  public lista_filmes = new Array<any>();
  public Cine: string;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public filmeProvider: FilmesProvider) {
  }

  ionViewDidEnter() {
    this.Cine = this.navParams.get("nomeCine");
    console.log(this.Cine);  
    this.filmeProvider.LoadFilmes(this.Cine).subscribe(data => {
      console.log(data);  
      let retorno = (data as any);     
      retorno = JSON.stringify(retorno);
      let filme = JSON.parse(retorno);
      filme = JSON.parse(retorno); 
      this.lista_filmes = filme.filme;
      console.log(this.lista_filmes)
    }, error =>{
        console.log(error);
      })
    }
   
}

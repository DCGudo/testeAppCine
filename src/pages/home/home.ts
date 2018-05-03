import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilmesCinePage } from '../filmes-cine/filmes-cine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private nomeCine : string;

  constructor(public navCtrl: NavController) {
  }

  public OpenFilmesCidade(){
    this.nomeCine = "cidade";
    console.log(this.nomeCine);
    this.navCtrl.push(FilmesCinePage,{nomeCine : this.nomeCine});
  }

  public OpenFilmesCiane(){
    this.nomeCine = "ciane";
    console.log(this.nomeCine);
    this.navCtrl.push(FilmesCinePage,{nomeCine : this.nomeCine});
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the FilmesDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filmes-detalhe',
  templateUrl: 'filmes-detalhe.html',
})
export class FilmesDetalhePage {
  public filmeDetalhe;
  public urlVideo;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sanitizer: DomSanitizer) {
  }

  ionViewDidEnter() {
    this.filmeDetalhe = this.navParams.get("filmeDetalhe");
    console.log('Filme recebido: ', this.filmeDetalhe);    
  }

  updateVideoUrl(id: string):string {
  // Appending an ID to a YouTube URL is safe.
  // Always make sure to construct SafeValue objects as
  // close as possible to the input data so
  // that it's easier to check if the value is safe.
  let url = 'https://www.youtube.com/embed' + id;
  this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  console.log(this.urlVideo);
  return this.urlVideo;
  }

}

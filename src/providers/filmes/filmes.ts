import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the FilmesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmesProvider {
  private basepath = "/filmesapi";
  private platform;

  constructor(public http: HttpClient,
    private _platform: Platform) {
      if (this._platform.is("cordova")) {
        //this.basepath = "https://firebasestorage.googleapis.com";
        this.basepath = "https://raw.githubusercontent.com/DCGudo/appCine/master";        
    }
  }

  public LoadFilmes(cinema) {
    //return this.http.get(this.basepath + "/v0/b/cinema-198ba.appspot.com/o/shoppingCidade.json?alt=media&token=7de39e0d-04f7-45ab-9742-35b5eb1849f6")
    console.log(cinema);
    if (cinema == "cidade"){
      return this.http.get(this.basepath + "/json/shoppingCidade%20.json");
    }

    if (cinema == "ciane"){
      return this.http.get(this.basepath + "/json/shoppingCiane.json");
    }
  }
}

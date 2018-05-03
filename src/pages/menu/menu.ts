import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Menu } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public LoginApp():void{
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}

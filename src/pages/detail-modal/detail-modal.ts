import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FavorUS } from '../../model/item-list-us-model';

/**
 * Generated class for the DetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-modal',
  templateUrl: 'detail-modal.html',
})
export class DetailModalPage {

  favor: FavorUS;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController) {
    this.favor = navParams.get("favor");
  }

  ionViewDidLoad() {
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

}

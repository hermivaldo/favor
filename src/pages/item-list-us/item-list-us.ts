import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ListUs } from '../../model/list-us-model';
import { DetailModalPage } from '../detail-modal/detail-modal';
import { FavorUS } from '../../model/item-list-us-model';

/**
 * Generated class for the ItemListUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'item-list-us',
  templateUrl: 'item-list-us.html',
})
export class ItemListUsPage {

  @Input("favores") favorList: Array<ListUs>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  presentModal(favor: FavorUS){
    const modal = this.modalCtrl.create(DetailModalPage, {"favor" : favor});
    modal.present()
}

}

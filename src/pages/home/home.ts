import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailModalPage } from '../detail-modal/detail-modal';
import { ListUsProvider } from '../../providers/list-us/list-us';
import { ListUs } from '../../model/list-us-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favores:  Array<ListUs>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
  public listProvider: ListUsProvider) {
    this.favores = listProvider.getAllItens();
  }

  presentModal(){
      const modal = this.modalCtrl.create(DetailModalPage)
      modal.present()
  }
}

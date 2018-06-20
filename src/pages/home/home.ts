import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailModalPage } from '../detail-modal/detail-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }


  presentModal(){
      const modal = this.modalCtrl.create(DetailModalPage)
      modal.present()
  }
}

import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailModalPage } from '../detail-modal/detail-modal';
import { FavorUsProvider } from '../../providers/favor-us/favor-us';
import { FavorUS } from '../../model/item-list-us-model';
import { StatusFavor } from '../../model/status-favor';
import { ListUsProvider } from '../../providers/list-us/list-us';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favores: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public listProvider: ListUsProvider) {

    listProvider.getAllItens().then(favores => this.favores = favores);
  }

  ngOnInit() {
    
 }

  presentModal(){
      const modal = this.modalCtrl.create(DetailModalPage)
      modal.present()
  }
}

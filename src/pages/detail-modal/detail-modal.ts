import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FavorUS } from '../../model/item-list-us-model';
import { AlertController } from 'ionic-angular';
import { ListUsProvider } from '../../providers/list-us/list-us';

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
  public viewCtrl: ViewController, public alertCtrl: AlertController, public list: ListUsProvider) {
    this.favor = navParams.get("favor");
  }

  ionViewDidLoad() {
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

  excluirChamado(){
    const confirm = this.alertCtrl.create({
      title: 'Deletar Favor!',
      message: 'Deseja realmente remover esse favor?',
      buttons: [
        {
          text: 'não',
          handler: () => {
           
          }
        },
        {
          text: 'sim',
          handler: () => {
            this.list.deleteFavor(this.favor).then(c => this.dismiss()).catch(e => alert(e));
          }
        }
      ]
    });
    confirm.present();
  }
}

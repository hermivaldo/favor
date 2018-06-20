import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { SelectPerfilPage } from '../select-perfil/select-perfil';

/**
 * Generated class for the TutorialSlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial-slides',
  templateUrl: 'tutorial-slides.html',
})
export class TutorialSlidesPage {

  selctPerfil = SelectPerfilPage

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appCrtl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialSlidesPage');
  }

  slides = [
    {
      title: "Bem vindo ao Me Faça um Favor!",
      description: "Esse é um pequeno <b>paço a paço</b> de como o aplicativo funciona.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "O que é o Me Faça um Favor?",
      description: "<b>Me Faça um Favor</b> é um aplicativo no qual voce pode pedir ou fazer um favor para alguém, tudo depende do perfil escolhido.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Posso ganhar dinheiro com isso?",
      description: "O <b>Me Faça um Favor</b> é um aplicativo aberto no qual <b> os valores e preços são colocados por quem precisa do favor</b>, então tudo depende do que voce pretende fazer dentro da plataforma.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  continuar(){
    this.appCrtl.getRootNav().push(this.selctPerfil)
  }

}

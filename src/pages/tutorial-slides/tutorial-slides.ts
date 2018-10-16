import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Slides } from 'ionic-angular';
import { SelectPerfilPage } from '../select-perfil/select-perfil';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { AlertController } from 'ionic-angular';

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
  @ViewChild('slide') slide: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appCrtl: App, public usrDB: UsuarioServiceProvider, 
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }
  

  slides = [
    {
      title: "Bem vindo ao Me Faça um Favor!",
      description: "Esse é um pequeno <b>paço a paço</b> de como o aplicativo funciona.",
      image: "assets/imgs/st1.jpg",
    },
    {
      title: "O que é o Me Faça um Favor?",
      description: "<b>Me Faça um Favor</b> é um aplicativo no qual voce pode pedir ou fazer um favor para alguém, tudo depende do perfil escolhido.",
      image: "assets/imgs/st1.jpg",
    },
    {
      title: "Posso ganhar dinheiro com isso?",
      description: "O <b>Me Faça um Favor</b> é um aplicativo aberto no qual <b> os valores e preços são colocados por quem precisa do favor</b>, então tudo depende do que voce pretende fazer dentro da plataforma.",
      image: "assets/imgs/st1.jpg",
    }
  ];

  continuar(status: boolean){

    var tmpUser = this.usrDB.getUsarioLogado();
    tmpUser.tutorial = status;
    var result = this.usrDB.updateNode(tmpUser);
    result.then(c => this.appCrtl.getRootNav().push(this.selctPerfil))
    .catch(c => {
      alert("falha ao se conectar ao servidor " + c);
      this.appCrtl.getRootNav().push(this.selctPerfil)
    })
  }


  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Exibindo tutorial.',
      message: 'Deseja que o tutorial seja exibido da próxima vez que realizar login?',
      buttons: [
        {
          text: 'não',
          handler: () => {
            this.continuar(false);
          }
        },
        {
          text: 'sim',
          handler: () => {
            this.continuar(false);
          }
        }
      ]
    });
    confirm.present();
  }


  next() {
    this.slide.slideNext();
  }
}

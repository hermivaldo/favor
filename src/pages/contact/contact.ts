import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuarioServiceProvider } from '../../providers/usuario-service/usuario-service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {
  loginPage = LoginPage
  usuario: Usuario

  constructor(public navCtrl: NavController, public appCrtl: App, public user: UsuarioServiceProvider) {
    this.usuario = this.user.getUsarioLogado();
  }

  ngOnInit() {
    while(this.usuario == null){
      console.log("nao carregado")
    }
    
  }

  sairSistema(){
    this.appCrtl.getRootNav().setRoot(this.loginPage)
  }
}

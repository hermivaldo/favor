import { Injectable } from '@angular/core';
import { ListUs } from '../../model/list-us-model';
import { FavorUS } from '../../model/item-list-us-model';
import { UsuarioS } from '../../model/usuarioS.model';
import { Chat } from '../../model/chat-model';
import { StatusFavor } from '../../model/status-favor';
import { FavorUsProvider } from '../favor-us/favor-us';
/*
  Generated class for the ListUsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListUsProvider {

  favores: any; 
  STATUS = false;
  constructor(public listProvider: FavorUsProvider) {
      
    listProvider.getFavorList(StatusFavor.ABERTO).subscribe(result => {
      this.favores = result;
      this.STATUS = true;
    });
  }

  getAllItens(){  
    const PROMISSE = new Promise((resolve, reject) =>{
      var menuList = new Array<ListUs>();

      var list = new ListUs();
      list.titulo = "Abertos";

    setTimeout(() => {
      list.listFavor = this.favores;
      menuList.push(list);
      if (this.STATUS) resolve(menuList); else reject(null);
    }, 5000);
      
    });
    return PROMISSE;
  }


  deleteFavor(favor: FavorUS){
    return this.listProvider.deleteFavor(favor.key);
  }
}

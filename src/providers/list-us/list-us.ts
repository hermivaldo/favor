import { Injectable } from '@angular/core';
import { ListUs } from '../../model/list-us-model';
import { FavorUS } from '../../model/item-list-us-model';
import { UsuarioS } from '../../model/usuarioS.model';

/*
  Generated class for the ListUsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListUsProvider {

  getAllItens() : Array<ListUs>{  
    var menuList = new Array<ListUs>();

    var list = new ListUs();
    var favor = new FavorUS();
    favor.titulo = "Meu vizinho totoro 2";
    favor.descricao = "Pena que ainda não existe.";
    favor.imagem = "assets/imgs/av1.png";
    var arraylistFavor = new Array<FavorUS>();
    arraylistFavor.push(favor);
    list.titulo = "Abertos";
    list.listFavor = arraylistFavor;
    var user2 = new UsuarioS();
    user2.nome = "Maria aparecida da graça";
    user2.dataN = "16/11/1995";
    user2.foto = "assets/imgs/av2.png";
    favor.usuario = user2;
    menuList.push(list);

    var list2 = new ListUs();
    var favor2 = new FavorUS();
    favor2.titulo = "Tumulo dos vagalumes";
    favor2.descricao = "Esse todo mundo chora";
    favor2.imagem = "assets/imgs/av2.png";
    var arraylistFavor2 = new Array<FavorUS>();
    arraylistFavor2.push(favor2);
    list2.titulo = "Fechado";
    list2.listFavor = arraylistFavor2;
    var user = new UsuarioS();
    user.nome = "Hermivaldo Braga Oliveira Junior";
    user.dataN = "13/05/1994";
    user.foto = "assets/imgs/av1.png";
    favor2.usuario = user;
    
    menuList.push(list2);

    return menuList;

  }

}

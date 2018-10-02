import { Injectable } from '@angular/core';
import { ListUs } from '../../model/list-us-model';
import { FavorUS } from '../../model/item-list-us-model';
import { UsuarioS } from '../../model/usuarioS.model';
import { Chat } from '../../model/chat-model';

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
    favor.descricao = "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.";
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
    favor.preco = 404.00;
    var chat = new Chat();
    chat.hora = "9/08/2018 as 10:10";
    chat.ultimaM = "Precisamos conversar melhor sobre os componentes necessários para verificar o problema...";
    favor.chat = chat;
    menuList.push(list);
    favor.tipo = 1;

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
    favor2.preco = 9.99;
    var chat2 = new Chat();
    chat2.hora = "7/08/2018 as 8:28";
    chat2.ultimaM = "Estamos tentando entrar em contato, porém náo conseguimos falar com o senhor...";
    favor2.tipo = 2;
    favor2.chat = chat2;
    menuList.push(list2);
    
    var list3 = new ListUs();
    var favor3 = new FavorUS();
    favor3.titulo = "Compra de um carrinho de bebe";
    favor3.descricao = "Preciso de um carrinho de bebe";
    favor3.imagem = "assets/imgs/av2.png";
    favor3.preco = 3.89;
    var arraylistFavor3 = new Array<FavorUS>();
    arraylistFavor3.push(favor3);
    var user3 = new UsuarioS();
    list3.titulo = "Andamento";
    list3.listFavor = arraylistFavor3;
    user3.nome = "Renata Oliveira";
    user3.dataN = "01/08/1973";
    user3.foto = "assets/imgs/av1.png";
    favor3.usuario = user3;
    var chat3 = new Chat();
    chat3.hora = "17/08/2018 as 8:28";
    chat3.ultimaM = "Estamos tentando entrar em contato...";
    favor3.chat = chat3;
    favor3.tipo = 3;

    menuList.push(list3);

    return menuList;

  }

}

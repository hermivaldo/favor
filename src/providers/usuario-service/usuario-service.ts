import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../../model/usuario.model';

/*
  Generated class for the UsuarioServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioServiceProvider {

  private userList = this.db.list<Usuario>('usuarios')

  constructor(private db: AngularFireDatabase) {
  }

  findUser(usuario: Usuario){  
      return this.userList.query.equalTo(usuario.usuario, "nome").toJSON()
  }

  addUser(usuario: Usuario){
      return this.userList.push(usuario)
  }

  updateNode(usuario: Usuario){
      return this.userList.update(usuario.id, usuario)
  }

}

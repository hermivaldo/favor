import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../../model/usuario.model';
import { map } from 'rxjs/operators'
@Injectable()
export class UsuarioServiceProvider {

  private userList = this.db.list<Usuario>('usuarios')
  private defaultUser = new Usuario();
  constructor(private db: AngularFireDatabase) {
  }

  findUser(usuario: Usuario){  
    return this.userList.snapshotChanges().pipe(
      map( changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
        .filter( c => c.usuario == usuario.usuario  )  
      )
    );
   
  }

  changeUser(user: Usuario){
    this.defaultUser = user;
  }

  getUsarioLogado(){
    return this.defaultUser;
  }

  addUser(usuario: Usuario){
      return this.userList.push(usuario);
  }

  updateNode(usuario: Usuario){
      return this.userList.update(usuario.key, usuario)
  }

}

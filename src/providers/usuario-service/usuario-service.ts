import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from '../../model/usuario.model';
import { map } from 'rxjs/operators'
@Injectable()
export class UsuarioServiceProvider {

  private userList = this.db.list<Usuario>('usuarios')
  
  constructor(private db: AngularFireDatabase) {
  }

  findUser(usuario: Usuario){  
    return this.userList.valueChanges().pipe(
      map((us) => us[0].usuario == usuario.usuario)
    );
   
  }

  addUser(usuario: Usuario){
      return this.userList.push(usuario)
  }

  updateNode(usuario: Usuario){
      return this.userList.update(usuario.id, usuario)
  }

}

import { UsuarioS } from "./usuarioS.model";
import { Chat } from "./chat-model";

export class FavorUS {
    imagem: string;
    titulo: string;
    descricao: string;
    tipo: number;
    usuario: UsuarioS;
    chat: Chat;
}
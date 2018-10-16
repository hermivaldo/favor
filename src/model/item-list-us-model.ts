import { Chat } from "./chat-model";
import { Usuario } from "./usuario.model";

export class FavorUS {
    imagem: string;
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    tipo: number;
    usuario: Usuario;
    chat: Chat;
    preco: number;
}
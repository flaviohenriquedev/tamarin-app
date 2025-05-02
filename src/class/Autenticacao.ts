import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Usuario} from "@/features/gerenciamento-sistema/gestao-usuario/usuario/ts/usuario";

export class Autenticacao extends EntidadePadrao {
    email: string;
    senha: string;
    token: string;
    usuario: Usuario;

    constructor() {
        super();
    }
}
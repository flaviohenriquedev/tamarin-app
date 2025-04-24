import {Usuario} from "@/features/common/usuario/ts/usuario";
import {EntidadePadrao} from "@/class/EntidadePadrao";

export class Autenticacao extends EntidadePadrao{
    email: string;
    senha: string;
    token: string;
    usuario: Usuario;

    constructor() {
        super();
    }
}
import {EntidadeCliente} from "@/class/EntidadeCliente";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

export class UsuarioCliente extends EntidadeCliente {
    usuario: Usuario;

    constructor() {
        super();
    }
}
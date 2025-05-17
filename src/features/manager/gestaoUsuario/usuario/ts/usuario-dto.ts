import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

export class UsuarioDTO {
    usuario: Usuario
    clientes: Cliente[]

    constructor() {
    }
}
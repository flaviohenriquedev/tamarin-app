import {EntidadeTenant} from "@/class/EntidadeTenant";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

export class UsuarioCliente extends EntidadeTenant {
    usuario: Usuario;

    constructor() {
        super();
    }
}
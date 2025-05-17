import {CrudService} from "@/services/crud-service";
import {usuarioEndPoints} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-endpoint";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

export class UsuarioService extends CrudService<Usuario> {
    constructor() {
        super(usuarioEndPoints);
    }
}
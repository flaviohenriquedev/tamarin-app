import {CrudService} from "@/services/crud-service";
import {Usuario} from "@/features/manager/usuario/ts/usuario";
import {usuarioEndPoints} from "@/features/manager/usuario/ts/usuario-endpoint";

export class UsuarioService extends CrudService<Usuario> {
    constructor() {
        super(usuarioEndPoints);
    }
}
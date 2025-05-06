import {CrudService} from "@/services/crud-service";
import {usuarioEndPoints} from "@/features/manager/usuario/ts/usuario-endpoint";
import {UsuarioDTO} from "@/features/manager/usuario/ts/usuario-dto";

export class UsuarioService extends CrudService<UsuarioDTO> {
    constructor() {
        super(usuarioEndPoints);
    }
}
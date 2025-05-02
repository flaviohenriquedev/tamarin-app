import {CrudService} from "@/sistema/_root/service/crud-service";
import {Usuario} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario";
import {usuarioEndPoints} from "@/sistema/recursos-humanos/modulos/usuario/ts/usuario-end-points";

export class UsuarioService extends CrudService<Usuario>{
    constructor() {
        super(usuarioEndPoints)
    }
}
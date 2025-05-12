import {CrudService} from "@/services/crud-service";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {perfilEndPoints} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-endpoint";

export class PerfilService extends CrudService<Perfil> {
    constructor() {
        super(perfilEndPoints);
    }
}
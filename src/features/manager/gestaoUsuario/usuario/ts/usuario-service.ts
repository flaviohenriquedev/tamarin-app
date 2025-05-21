import {CrudService} from "@/services/crud-service";
import {usuarioEndPoints} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-endpoint";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {EndPointType} from "@/types/_root/EndPointType";

export class UsuarioService extends CrudService<Usuario> {
    public getBaseURL(): string {
        return '/usuario';
    }
    public getEndpoint(): EndPointType {
        return usuarioEndPoints;
    }
}
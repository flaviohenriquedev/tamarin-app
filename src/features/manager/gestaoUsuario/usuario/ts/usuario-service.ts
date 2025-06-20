import {CrudService} from "@/services/CrudService";
import {usuarioEndPoints} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-endpoint";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class UsuarioService extends CrudService<Usuario> {
    public getBaseURL(): string {
        return '/usuario';
    }

    public getEndpoint(): EndPointType {
        return usuarioEndPoints;
    }

    async buscarUsuarioPorEmail(email: string): Promise<Usuario> {
        return await request<Usuario>(`${this.getBaseURL()}/buscarUsuarioPorEmail/${email}`, MetodoHTTP.GET);
    }
}
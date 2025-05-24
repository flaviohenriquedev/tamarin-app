import {CrudService} from "@/services/crud-service";
import {usuarioEndPoints} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-endpoint";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";
import {UsuarioDto} from "@/features/manager/gestaoUsuario/usuario/ts/usuario-dto";

export class UsuarioService extends CrudService<Usuario> {
    public getBaseURL(): string {
        return '/usuario';
    }

    public getEndpoint(): EndPointType {
        return usuarioEndPoints;
    }

    async getUsuario(email: string): Promise<Usuario> {
        return await request<Usuario>(`${this.getBaseURL()}/getuser/${email}`, MetodoHTTP.GET);
    }

    async criarUsuario(usuarioDto: UsuarioDto): Promise<Usuario> {
        return await request<Usuario>(`${this.getBaseURL()}/criarUsuario`, MetodoHTTP.POST, usuarioDto);
    }
}
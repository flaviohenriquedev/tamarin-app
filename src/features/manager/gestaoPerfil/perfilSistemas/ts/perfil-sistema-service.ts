import {CrudService} from "@/services/crud-service";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {perfilSistemaEndPoints} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema-endpoints";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class PerfilSistemaService extends CrudService<PerfilSistema> {

    public getBaseURL(): string {
        return "/perfil-sistema";
    }
    public getEndpoint(): EndPointType {
        return perfilSistemaEndPoints;
    }

    async buscarPerfisPorIdClienteSistema(idClienteSistema: string): Promise<PerfilSistema[]> {
        const resultado = await request<PerfilSistema[]>(`${this.getBaseURL()}/buscar-por-id-cliente-sistema/${idClienteSistema}`, MetodoHTTP.GET);
        return resultado ?? [];
    }
}
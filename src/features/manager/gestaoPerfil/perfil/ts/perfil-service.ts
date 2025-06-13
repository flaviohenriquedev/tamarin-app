import {CrudService} from "@/services/crud-service";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/Perfil";
import {perfilEndPoints} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-endpoint";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class PerfilService extends CrudService<Perfil> {

    public getBaseURL(): string {
        return "/perfil";
    }
    public getEndpoint(): EndPointType {
        return perfilEndPoints;
    }

    async buscarPerfisPorIdCliente(idCliente: string): Promise<Perfil[]> {
        const resultado = await request<Perfil[]>(`${this.getBaseURL()}/buscar-por-id-cliente/${idCliente}`, MetodoHTTP.GET);
        return resultado ?? [];
    }

    async buscarPerfisPorIdClienteSistema(idClienteSistema: string): Promise<Perfil[]> {
        const resultado = await request<Perfil[]>(`${this.getBaseURL()}/buscar-por-id-cliente-sistema/${idClienteSistema}`, MetodoHTTP.GET);
        return resultado ?? [];
    }

}
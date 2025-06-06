import {CrudService} from "@/services/crud-service";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/colaborador";
import {EndPointType} from "@/types/_root/EndPointType";
import {colaboradorEndpoint} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador-endpoint";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class ColaboradorService extends CrudService<Colaborador> {
    public getBaseURL(): string {
        return "/colaborador";
    }
    public getEndpoint(): EndPointType {
        return colaboradorEndpoint;
    }

    async listarColaboradoresAtivos(): Promise<Colaborador[]> {
        const resultado = await request<Colaborador[]>(`${this.getBaseURL()}/listar-colaboradores-ativos`, MetodoHTTP.GET);
        return resultado ?? [];
    }
}
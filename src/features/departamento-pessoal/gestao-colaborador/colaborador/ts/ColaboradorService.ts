import {CrudService} from "@/services/crud-service";
import {Colaborador} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/Colaborador";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";
import {
    colaboradorEndPoints
} from "@/features/departamento-pessoal/gestao-colaborador/colaborador/ts/colaboradorEndPoints";

export class ColaboradorService extends CrudService<Colaborador> {
    public getBaseURL(): string {
        return "/colaborador";
    }
    public getEndpoint(): EndPointType {
        return colaboradorEndPoints;
    }

    async listarColaboradoresAtivos(): Promise<Colaborador[]> {
        const resultado = await request<Colaborador[]>(`${this.getBaseURL()}/listar-colaboradores-ativos`, MetodoHTTP.GET);
        return resultado ?? [];
    }
}
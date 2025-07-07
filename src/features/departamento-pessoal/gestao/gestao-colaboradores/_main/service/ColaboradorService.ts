import {CrudService} from "@/services/CrudService";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";
import {Colaborador} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/entidade/Colaborador";
import {
    colaboradorEndPoints
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/ts/colaboradorEndPoints";

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

    async listarColaboradoresDesligados(): Promise<Colaborador[]> {
        const resultado = await request<Colaborador[]>(`${this.getBaseURL()}/listar-colaboradores-desligados`, MetodoHTTP.GET);
        return resultado ?? [];
    }

    async buscarPorMatricula(matricula: number): Promise<Colaborador> {
        const resultado = await request<Colaborador>(`${this.getBaseURL()}/buscar-por-matricula/${matricula}`, MetodoHTTP.GET);
        return resultado ?? new Colaborador();
    }

    async buscarPorCpf(cpf: string): Promise<Colaborador> {
        const resultado = await request<Colaborador>(`${this.getBaseURL()}/buscar-por-cpf/${cpf}`, MetodoHTTP.GET);
        return resultado ?? new Colaborador();
    }

    async buscarPorEmail(email: string): Promise<Colaborador> {
        const resultado = await request<Colaborador>(`${this.getBaseURL()}/buscar-por-email/${email}`, MetodoHTTP.GET);
        return resultado ?? new Colaborador();
    }
}
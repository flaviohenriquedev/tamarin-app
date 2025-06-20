import {CrudService} from "@/services/CrudService";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {cidadeEndPoints} from "@/features/manager/gestaoLocalidade/cidade/ts/cidadeEndPoints";
import {EndPointType} from "@/types/_root/EndPointType";
import {request} from "@/services/request";
import {MetodoHTTP} from "@/enums/MetodoHTTPEnum";

export class CidadeService extends CrudService<Cidade> {
    public getBaseURL(): string {
        return "/cidade";
    }
    public getEndpoint(): EndPointType {
        return cidadeEndPoints;
    }

    async buscarPorNomeParecido(nome: string): Promise<Cidade[]> {
        const resultado = await request<Cidade[]>(`${this.getBaseURL()}/buscar-por-nome-iniciado-com/${nome}`, MetodoHTTP.GET)
        return resultado ?? [];
    }
}

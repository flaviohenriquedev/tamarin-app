import {CrudService} from "@/services/crud-service";
import {Admissao} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao";
import {EndPointType} from "@/types/_root/EndPointType";
import {admissaoEndpoint} from "@/features/departamento-pessoal/gestao/admissao/ts/admissao-endpoint";

export class AdmissaoService extends CrudService<Admissao> {
    public getBaseURL(): string {
        return "/admissao";
    }

    public getEndpoint(): EndPointType {
        return admissaoEndpoint;
    }
}
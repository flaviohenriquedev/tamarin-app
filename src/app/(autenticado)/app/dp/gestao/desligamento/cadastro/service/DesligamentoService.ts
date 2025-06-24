import {CrudService} from "@/services/CrudService";
import {Desligamento} from "@/app/(autenticado)/app/dp/gestao/desligamento/cadastro/entidade/Desligamento";
import {EndPointType} from "@/types/_root/EndPointType";
import {desligamentoEndpoint} from "@/app/(autenticado)/app/dp/gestao/desligamento/cadastro/ts/desligamentoEndpoint";

export class DesligamentoService extends CrudService<Desligamento> {
    public getBaseURL(): string {
        return "/desligamento";
    }
    public getEndpoint(): EndPointType {
        return desligamentoEndpoint;
    }
}
import {CrudService} from "@/services/CrudService";
import {
    ColaboradorDesligamento
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/cadastro/entidade/ColaboradorDesligamento";
import {EndPointType} from "@/types/_root/EndPointType";
import {
    colaboradorDesligamentoEndpoint
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/desligamento/cadastro/ts/colaboradorDesligamentoEndpoint";

export class ColaboradorDesligamentoService extends CrudService<ColaboradorDesligamento> {
    public getBaseURL(): string {
        return "/colaborador-desligamento";
    }
    public getEndpoint(): EndPointType {
        return colaboradorDesligamentoEndpoint;
    }
}
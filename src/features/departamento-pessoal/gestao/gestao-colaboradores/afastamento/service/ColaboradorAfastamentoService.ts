import {CrudService} from "@/services/CrudService";
import {
    ColaboradorAfastamento
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/afastamento/model/ColaboradorAfastamento";
import {EndPointType} from "@/types/_root/EndPointType";
import {
    colaboradorAfastamentoEndpoint
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/afastamento/ts/colaboradorAfastamentoEndpoint";

export class ColaboradorAfastamentoService extends CrudService<ColaboradorAfastamento> {

    public getBaseURL(): string {
        return "/colaborador-afastamento";
    }

    public getEndpoint(): EndPointType {
        return colaboradorAfastamentoEndpoint;
    }
}
import {CrudService} from "@/services/CrudService";
import {EndPointType} from "@/types/_root/EndPointType";
import {ColaboradorFerias} from "@/features/departamento-pessoal/gestao/gestao-ferias/class/ColaboradorFerias";
import {
    colaboradorFeriasEndpoint
} from "@/features/departamento-pessoal/gestao/gestao-ferias/ts/colaboradorFeriasEndpoint";

export class ColaboradorFeriasService extends CrudService<ColaboradorFerias> {
    public getBaseURL(): string {
        return "/colaborador-ferias";
    }

    public getEndpoint(): EndPointType {
        return colaboradorFeriasEndpoint;
    }
}
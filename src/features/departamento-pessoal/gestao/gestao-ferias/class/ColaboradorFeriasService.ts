import {CrudService} from "@/services/CrudService";
import {EndPointType} from "@/types/_root/EndPointType";
import {colaboradorFeriasEndpoint} from "@/features/departamento-pessoal/gestao/ferias/ts/colaboradorFeriasEndpoint";
import {ColaboradorFerias} from "@/features/departamento-pessoal/gestao/ferias/class/ColaboradorFerias";

export class ColaboradorFeriasService extends CrudService<ColaboradorFerias> {
    public getBaseURL(): string {
        return "/colaborador-ferias";
    }

    public getEndpoint(): EndPointType {
        return colaboradorFeriasEndpoint;
    }
}
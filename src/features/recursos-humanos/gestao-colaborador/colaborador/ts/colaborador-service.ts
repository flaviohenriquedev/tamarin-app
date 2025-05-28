import {CrudService} from "@/services/crud-service";
import {Colaborador} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador";
import {EndPointType} from "@/types/_root/EndPointType";
import {colaboradorEndpoint} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/colaborador-endpoint";

export class ColaboradorService extends CrudService<Colaborador>{
    getBaseURL(): string {
        return '/colaborador';
    }

    getEndpoint(): EndPointType {
        return colaboradorEndpoint;
    }
}
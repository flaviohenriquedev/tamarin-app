import {CrudService} from "@/services/crud-service";
import {Estado} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado";
import {estadoEndPoints} from "@/features/gerenciamento-sistema/gestao-localidade/estado/ts/estado-end-points";
import {EndPointType} from "@/types/_root/EndPointType";

export class EstadoService extends CrudService<Estado> {

    public getBaseURL(): string {
        return "/estado";
    }

    public getEndpoint(): EndPointType {
        return estadoEndPoints;
    }

}

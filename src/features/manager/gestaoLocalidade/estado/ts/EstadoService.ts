import {CrudService} from "@/services/CrudService";
import {Estado} from "@/features/manager/gestaoLocalidade/estado/ts/Estado";
import {estadoEndPoints} from "@/features/manager/gestaoLocalidade/estado/ts/estadoEndPoints";
import {EndPointType} from "@/types/_root/EndPointType";

export class EstadoService extends CrudService<Estado> {

    public getBaseURL(): string {
        return "/estado";
    }

    public getEndpoint(): EndPointType {
        return estadoEndPoints;
    }

}

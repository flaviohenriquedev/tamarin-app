import {CrudService} from "@/services/crud-service";
import {paisEndPoints} from "@/features/manager/gestaoLocalidade/pais/ts/pais-end-points";
import {Pais} from "@/features/manager/gestaoLocalidade/pais/ts/pais";
import {EndPointType} from "@/types/_root/EndPointType";

export class PaisService extends CrudService<Pais> {

    public getBaseURL(): string {
        return "/pais";
    }

    public getEndpoint(): EndPointType {
        return paisEndPoints;
    }

}

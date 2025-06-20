import {CrudService} from "@/services/CrudService";
import {paisEndPoints} from "@/features/manager/gestaoLocalidade/pais/ts/paisEndPoints";
import {Pais} from "@/features/manager/gestaoLocalidade/pais/ts/Pais";
import {EndPointType} from "@/types/_root/EndPointType";

export class PaisService extends CrudService<Pais> {

    public getBaseURL(): string {
        return "/pais";
    }

    public getEndpoint(): EndPointType {
        return paisEndPoints;
    }

}

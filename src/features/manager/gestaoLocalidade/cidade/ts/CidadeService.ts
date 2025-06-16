import {CrudService} from "@/services/crud-service";
import {Cidade} from "@/features/manager/gestaoLocalidade/cidade/ts/Cidade";
import {cidadeEndPoints} from "@/features/manager/gestaoLocalidade/cidade/ts/cidadeEndPoints";
import {EndPointType} from "@/types/_root/EndPointType";

export class CidadeService extends CrudService<Cidade> {

    public getBaseURL(): string {
        return "/cidade";
    }
    public getEndpoint(): EndPointType {
        return cidadeEndPoints;
    }
}

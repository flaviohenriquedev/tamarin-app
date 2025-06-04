import {CrudService} from "@/services/crud-service";
import {Setor} from "@/features/departamento-pessoal/administracao/setores/ts/setor";
import {EndPointType} from "@/types/_root/EndPointType";
import {setoresEndpoint} from "@/features/departamento-pessoal/administracao/setores/ts/setores-endpoint";

export class SetoresService extends CrudService<Setor> {
    public getBaseURL(): string {
        return "/setor";
    }

    public getEndpoint(): EndPointType {
        return setoresEndpoint;
    }
}
import {CrudService} from "@/services/crud-service";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {perfilSistemaEndPoints} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema-endpoints";
import {EndPointType} from "@/types/_root/EndPointType";

export class PerfilSistemaService extends CrudService<PerfilSistema> {

    public getBaseURL(): string {
        return "/perfil-sistema";
    }
    public getEndpoint(): EndPointType {
        return perfilSistemaEndPoints;
    }
}
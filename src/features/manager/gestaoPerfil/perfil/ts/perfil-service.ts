import {CrudService} from "@/services/crud-service";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/Perfil";
import {perfilEndPoints} from "@/features/manager/gestaoPerfil/perfil/ts/perfil-endpoint";
import {EndPointType} from "@/types/_root/EndPointType";

export class PerfilService extends CrudService<Perfil> {

    public getBaseURL(): string {
        return "/perfil";
    }
    public getEndpoint(): EndPointType {
        return perfilEndPoints;
    }
}
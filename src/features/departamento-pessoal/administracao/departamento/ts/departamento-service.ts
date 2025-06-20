import {EndPointType} from "@/types/_root/EndPointType";
import {CrudService} from "@/services/CrudService";
import {Departamento} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento";
import {
    departamentoEndpoint
} from "@/features/departamento-pessoal/administracao/departamento/ts/departamento-endpoint";

export class DepartamentoService extends CrudService<Departamento>{
    getBaseURL(): string {
        return '/departamento';
    }

    getEndpoint(): EndPointType {
        return departamentoEndpoint;
    }
}
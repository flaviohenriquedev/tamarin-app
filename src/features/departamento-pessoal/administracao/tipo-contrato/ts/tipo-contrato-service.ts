import {CrudService} from "@/services/CrudService";
import {TipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato";
import {EndPointType} from "@/types/_root/EndPointType";
import {
    tipoContratoEndpoint
} from "@/features/departamento-pessoal/administracao/tipo-contrato/ts/tipo-contrato-endpoint";

export class TipoContratoService extends CrudService<TipoContrato> {
    public getBaseURL(): string {
        return "/tipo-contrato";
    }

    public getEndpoint(): EndPointType {
        return tipoContratoEndpoint;
    }
}
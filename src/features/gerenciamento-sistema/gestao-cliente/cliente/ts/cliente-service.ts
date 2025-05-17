import {CrudService} from "@/services/crud-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {clienteEndPoints} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-end-points";
import {EndPointType} from "@/types/_root/EndPointType";

export class ClienteService extends CrudService<Cliente> {
    public getBaseURL(): string {
        return "/cliente";
    }

    public getEndpoint(): EndPointType {
        return clienteEndPoints;
    }

}

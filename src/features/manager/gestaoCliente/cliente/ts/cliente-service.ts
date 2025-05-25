import {CrudService} from "@/services/crud-service";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {clienteEndPoints} from "@/features/manager/gestaoCliente/cliente/ts/cliente-end-points";
import {EndPointType} from "@/types/_root/EndPointType";

export class ClienteService extends CrudService<Cliente> {
    public getBaseURL(): string {
        return "/cliente";
    }

    public getEndpoint(): EndPointType {
        return clienteEndPoints;
    }

}

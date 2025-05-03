import {CrudService} from "@/services/crud-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {clienteEndPoints} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-end-points";

export class ClienteService extends CrudService<Cliente> {
    constructor() {
        super(clienteEndPoints)
    }
}

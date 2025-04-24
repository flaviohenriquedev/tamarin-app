import {CrudService} from "@/services/crud-service";
import {Cliente} from "@/features/recursos-humanos/cliente/ts/cliente";
import {clienteEndPoints} from "@/features/recursos-humanos/cliente/ts/cliente-end-points";

export class ClienteService extends CrudService<Cliente> {
    constructor() {
        super(clienteEndPoints)
    }
}

import {CrudService} from "@/sistema/_root/service/crud-service";
import {Cliente} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente";
import {clienteEndPoints} from "@/sistema/recursos-humanos/modulos/cliente/ts/cliente-end-points";

export class ClienteService extends CrudService<Cliente> {
    constructor() {
        super(clienteEndPoints)
    }
}

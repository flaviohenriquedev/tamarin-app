import {CrudService} from "@/services/crud-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {clienteEndPoints} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-end-points";
import {ClienteRegister} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-register";
import {request} from "@/services/request";

export class ClienteService extends CrudService<Cliente> {

    constructor() {
        super(clienteEndPoints)
    }

    async salvarCliente(clienteRegister: ClienteRegister, callback?: () => void): Promise<Cliente | null> {
        await request<Cliente>(
            clienteEndPoints.salvarCliente.caminho,
            clienteEndPoints.salvarCliente.metodo,
            clienteRegister
        ).then((response) => {
            if(callback) callback();
            return response
        });

        return null;
    }
}

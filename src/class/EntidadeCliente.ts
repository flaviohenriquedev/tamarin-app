import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";

export class EntidadeCliente extends EntidadePadrao {
    cliente: Cliente;

    constructor() {
        super();
    }
}
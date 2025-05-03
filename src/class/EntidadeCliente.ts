import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

export class EntidadeCliente extends EntidadePadrao {
    cliente: Cliente;

    constructor() {
        super();
    }
}
import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Cliente} from "@/features/recursos-humanos/cliente/ts/cliente";

export class EntidadeCliente extends EntidadePadrao {
    cliente: Cliente;

    constructor() {
        super();
    }
}
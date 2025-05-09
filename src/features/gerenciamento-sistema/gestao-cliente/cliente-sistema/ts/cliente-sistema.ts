import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

export class ClienteSistema extends EntidadePadrao {
    public cliente: Cliente;
    public keySistema: SistemaENUM;

    constructor() {
        super();
    }
}
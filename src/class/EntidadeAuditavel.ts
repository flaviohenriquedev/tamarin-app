import {EntidadePadrao} from "@/class/EntidadePadrao";

export class EntidadeAuditavel extends EntidadePadrao {
    public dataCriacao: string;
    public usuarioCriacao: string;
    public dataAlteracao: string;
    public usuarioAlteracao: string;

    constructor() {
        super();
    }
}
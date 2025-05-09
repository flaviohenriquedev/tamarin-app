import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";

export class Perfil extends EntidadeAuditavel {
    public clienteSistema: ClienteSistema;
    public descricao: string;
    public rotas: string[];

    constructor() {
        super();
    }
}
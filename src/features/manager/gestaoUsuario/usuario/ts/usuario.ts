import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";

export class Usuario extends EntidadeAuditavel {
    nome: string;
    email: string;
    cpf: string;
    usuarioMaster: boolean;

    constructor() {
        super();
    }
}
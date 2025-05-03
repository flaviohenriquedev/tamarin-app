import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";

export class Cliente extends EntidadeAuditavel {
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    dataAbertura: Date;

    constructor() {
        super();
    }
}
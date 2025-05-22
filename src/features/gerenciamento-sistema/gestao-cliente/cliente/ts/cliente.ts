import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";

export class Cliente extends EntidadeAuditavel {
    nomeFantasia: string;
    razaoSocial: string;
    cnpj: string;
    dataAbertura: Date;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    telefone: string;
    email: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    cep: string;
    sistemas: ClienteSistema[];

    constructor() {
        super();
        this.sistemas = []
    }
}
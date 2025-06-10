import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {EmpresaSistema} from "@/features/manager/gestaoEmpresa/empresaSistema/ts/empresa-sistema";

export class Empresa extends EntidadeAuditavel {
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
    sistemas: EmpresaSistema[];

    constructor() {
        super();
        this.sistemas = []
    }
}
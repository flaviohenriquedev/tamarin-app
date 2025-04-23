import {EntidadeCliente} from "@/sistema/_root/entidades/EntidadeCliente";

export class Colaborador extends EntidadeCliente {
    nomeCompleto: string;
    cpf: string;
    dataNascimento: Date;
    sexo: string;
    email: string;
    telefone: string;
    endereco: string;
    cargo: string;
    departamento: string;
    dataAdmissao: Date;
    dataDemissao: Date;
    salario: number;
    tipoContrato: string;
    observacoes: string;

    constructor() {
        super();
    }
}

import {EntidadeTenant} from "@/class/EntidadeTenant";

export class Colaborador extends EntidadeTenant {
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

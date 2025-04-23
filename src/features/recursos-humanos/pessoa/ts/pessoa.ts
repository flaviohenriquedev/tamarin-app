import {EntidadeCliente} from "@/sistema/_root/entidades/EntidadeCliente";

export class Pessoa extends EntidadeCliente {
    public nomeCompleto: string;
    public cpf: string;
    public cnpj: string;
    public rg: string;
    dataNascimento: Date;

    constructor() {
        super();
    }
}
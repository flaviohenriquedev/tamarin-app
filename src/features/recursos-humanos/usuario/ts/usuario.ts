import {EntidadeCliente} from "@/sistema/_root/entidades/EntidadeCliente";

export class Usuario extends EntidadeCliente {
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    token: string;

    constructor() {
        super();
    }
}
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";

export class UsuarioRegister {
    nome: string;
    email: string;
    cpf: string;
    usuarioMaster: boolean;

    listaPerfil: Perfil[]

    constructor() {
        this.listaPerfil = [];
    }
}
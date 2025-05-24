import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {UsuarioCliente} from "@/features/manager/gestaoUsuario/usuarioCliente/ts/usuario-cliente";
import {UsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/ts/usuario-perfil";

export class Usuario extends EntidadeAuditavel {
    nome: string;
    email: string;
    cpf: string;
    usuarioMaster: boolean;

    clientes: UsuarioCliente[];
    listaPerfil: UsuarioPerfil[];

    constructor() {
        super();
        this.clientes = [];
        this.listaPerfil = [];
    }
}
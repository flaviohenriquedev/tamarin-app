import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {UsuarioCliente} from "@/features/manager/gestaoUsuario/usuarioCliente/ts/usuario-cliente";

export class Usuario extends EntidadeAuditavel {
    nome: string;
    email: string;
    cpf: string;
    usuarioMaster: boolean;

    clientes: UsuarioCliente[]

    constructor() {
        super();
        this.clientes = []
    }
}
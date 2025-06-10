import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {UsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/ts/usuario-perfil";
import {StatusUsuarioENUM} from "@/features/manager/gestaoUsuario/usuario/ts/status-usuario-enum";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";

export class Usuario extends EntidadeAuditavel {
    public nome: string;
    public email: string;
    public cpf: string;
    public token: string;
    public statusUsuario: StatusUsuarioENUM;
    public usuarioMaster: boolean;
    public perfis: UsuarioPerfil[];
    public empresas: Empresa[]

    constructor() {
        super();
        this.perfis = [];
    }
}
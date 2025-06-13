import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {UsuarioPerfil} from "@/features/manager/gestaoUsuario/usuarioPerfis/ts/usuario-perfil";
import {StatusUsuarioENUM} from "@/features/manager/gestaoUsuario/usuario/ts/status-usuario-enum";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeEnum} from "@/enums/FuncionalidadeEnum";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

export class Usuario extends EntidadeAuditavel {
    public nome: string;
    public email: string;
    public cpf: string;
    public token: string;
    public statusUsuario: StatusUsuarioENUM;
    public usuarioMaster: boolean;
    public perfis: UsuarioPerfil[];
    public dadosAcesso: DadosAcesso[]

    constructor() {
        super();
        this.perfis = [];
        this.dadosAcesso = [];
    }
}

export class DadosAcesso {
    public empresa: Empresa;
    public sistemas: DadosAcessoSistemaDTO[];
}

export class DadosAcessoSistemaDTO {
    public sistema: SistemaENUM;
    public modulos: DadosAcessoSistemaModuloDTO[];
}

export class DadosAcessoSistemaModuloDTO {
    public modulo: ModuloENUM;
    public funcionalidades: FuncionalidadeEnum[];
}
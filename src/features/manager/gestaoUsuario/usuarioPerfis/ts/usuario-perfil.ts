import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/Perfil";

export class UsuarioPerfil extends EntidadeAuditavel {
    usuario: Usuario;
    perfil: Perfil;

    constructor() {
        super();
        this.usuario = new Usuario();
        this.perfil = new Perfil();
    }
}

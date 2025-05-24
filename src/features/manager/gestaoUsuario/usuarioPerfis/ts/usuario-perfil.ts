import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {EntidadeAuditavel} from "@/class/EntidadeAuditavel";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

export class UsuarioPerfil extends EntidadeAuditavel {
    usuario: Usuario;
    perfilSistema: PerfilSistema;

    constructor() {
        super();
    }
}

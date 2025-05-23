import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {ClienteSistema} from "@/features/gerenciamento-sistema/gestao-cliente/cliente-sistema/ts/cliente-sistema";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";

export class UsuarioSistema extends EntidadePadrao {

    public perfil: Perfil;
    public clienteSistema: ClienteSistema;
    public rotas: PerfilSistemaModulo[];

    constructor() {
        super();
        this.rotas = [];
    }
}
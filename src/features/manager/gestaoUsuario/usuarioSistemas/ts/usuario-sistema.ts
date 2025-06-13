import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/Perfil";
import {EmpresaSistema} from "@/features/manager/gestaoEmpresa/empresaSistema/ts/empresa-sistema";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";

export class UsuarioSistema extends EntidadePadrao {

    public perfil: Perfil;
    public clienteSistema: EmpresaSistema;
    public rotas: PerfilSistemaModulo[];

    constructor() {
        super();
        this.rotas = [];
    }
}
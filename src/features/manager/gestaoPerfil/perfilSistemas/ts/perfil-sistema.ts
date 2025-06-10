import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {PerfilSistemaModulo} from "@/features/manager/gestaoPerfil/perfilSistemasRotas/ts/pefil-sistema-modulo";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

export class PerfilSistema extends EntidadePadrao {
    public perfil: Perfil;
    public keySistema: SistemaENUM;
    public rotas: PerfilSistemaModulo[];

    constructor() {
        super();
        this.perfil = new Perfil();
        this.rotas = [];
    }
}
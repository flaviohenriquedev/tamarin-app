import {EntidadePadrao} from "@/class/EntidadePadrao";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {ModuloENUM} from "@/enums/ModuloEnum";

export class PerfilSistemaModulo extends EntidadePadrao {

    perfilSistema: PerfilSistema;
    modulo: ModuloENUM;
    roles: string[];

    checked: boolean;
    isLista: boolean;

    constructor() {
        super();
    }
}
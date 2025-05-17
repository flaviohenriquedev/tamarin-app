import {EntidadePadrao} from "@/class/EntidadePadrao";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

export class PerfilSistemaModulo extends EntidadePadrao {

    perfilSistema: PerfilSistema;
    modulo: string;
    roles: string[];

    checked: boolean;
    isLista: boolean;

    constructor() {
        super();
    }
}
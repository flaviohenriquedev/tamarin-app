import {EntidadePadrao} from "@/class/EntidadePadrao";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeEnum} from "@/enums/FuncionalidadeEnum";

export class PerfilSistemaModulo extends EntidadePadrao {

    perfilSistema: PerfilSistema;
    modulo: ModuloENUM;
    funcionalidades: FuncionalidadeEnum[];

    constructor() {
        super();
    }
}
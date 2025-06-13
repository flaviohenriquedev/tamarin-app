import {EntidadePadrao} from "@/class/EntidadePadrao";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeEnum} from "@/enums/FuncionalidadeEnum";

export class PerfilModulo extends EntidadePadrao {
    public perfil: Perfil;
    public modulo: ModuloENUM;
    public funcionalidades: FuncionalidadeEnum[];

    constructor() {
        super();
    }
}
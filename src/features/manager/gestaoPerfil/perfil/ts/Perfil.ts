import {EntidadeTenant} from "@/class/EntidadeTenant";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {PerfilModulo} from "@/features/manager/gestaoPerfil/perfilModulo/entidade/PerfilModulo";

export class Perfil extends EntidadeTenant {
    public descricao: string;
    public sistema: SistemaENUM;
    public perfilModulos: PerfilModulo[];

    constructor() {
        super();
        this.perfilModulos = [];
    }
}
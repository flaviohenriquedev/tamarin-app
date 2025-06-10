import {EntidadeTenant} from "@/class/EntidadeTenant";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

export class Perfil extends EntidadeTenant {
    descricao: string;
    sistemas: PerfilSistema[];

    constructor() {
        super();
        this.sistemas = [];
    }
}
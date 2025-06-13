import {PerfilModulo} from "@/features/manager/gestaoPerfil/perfilModulo/entidade/PerfilModulo";
import {EntidadeSistema} from "@/class/EntidadeSistema";

export class Perfil extends EntidadeSistema {
    public descricao: string;
    public perfilModulos: PerfilModulo[];

    constructor() {
        super();
        this.perfilModulos = [];
    }
}
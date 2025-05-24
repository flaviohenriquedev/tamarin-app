import {EntidadeCliente} from "@/class/EntidadeCliente";
import {PerfilSistema} from "@/features/manager/gestaoPerfil/perfilSistemas/ts/perfil-sistema";

export class Perfil extends EntidadeCliente {
    descricao: string;
    sistemas: PerfilSistema[];

    constructor() {
        super();
        this.sistemas = [];
    }
}
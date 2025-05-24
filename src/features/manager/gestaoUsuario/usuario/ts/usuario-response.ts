import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";
import {Perfil} from "@/features/manager/gestaoPerfil/perfil/ts/perfil";

export class UsuarioResponse {
    public usuario: Usuario;
    public listaPerfil: Perfil[];

    constructor() {
        this.usuario = new Usuario();
        this.listaPerfil = [];
    }
}
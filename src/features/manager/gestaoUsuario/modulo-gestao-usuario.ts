import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloGestaoUsuario: ModulosType = {
    infos() {
        return {
            id: 'gerenciar-sistema-controle-acesso-usuarios',
            title: 'Usuarios',
            modulo: ModuloENUM.GESTAO_USUARIO,
            href: '/app/manager/usuario',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
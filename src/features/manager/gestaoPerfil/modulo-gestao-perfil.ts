import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloGestoPerfil: ModulosType = {
    infos() {
        return {
            id: 'gerenciar-sistema-controle-acesso-perfis',
            title: 'Perfis',
            modulo: ModuloENUM.GESTAO_PERFIL,
            href: '/app/manager/perfis',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades({...FuncionalidadeFactory.funcionalidadesPadrao()})
    }
}
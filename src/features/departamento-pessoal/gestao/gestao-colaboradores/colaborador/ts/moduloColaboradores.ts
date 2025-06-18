import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaboradores: ModulosType = {
    infos() {
        return {
            id: 'gestao-colaboradores',
            modulo: ModuloENUM.GESTAO_COLABORADORES,
            title: 'Colaboradores',
            href: '/app/dp/colaboradores',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ]);
    }
}
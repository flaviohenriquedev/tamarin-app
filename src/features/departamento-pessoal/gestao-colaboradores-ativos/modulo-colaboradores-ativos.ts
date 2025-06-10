import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaboradoresAtivos: ModulosType = {
    infos() {
        return {
            id: 'gestao-colaboradores-ativos',
            modulo: ModuloENUM.GESTAO_COLABORADORES_ATIVOS,
            title: 'Colaboradores Ativos',
            href: '/app/dp/colaborador/colaborador-ativo',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()]);
    }
}
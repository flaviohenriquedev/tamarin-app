import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaboradoresInativos: ModulosType = {
    infos() {
        return {
            id: 'gestao-colaboradores-ativos',
            modulo: ModuloENUM.GESTAO_COLABORADORES_INATIVOS,
            title: 'Colaboradores Inativos',
            href: 'rh/colaborador',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()]);
    }
}
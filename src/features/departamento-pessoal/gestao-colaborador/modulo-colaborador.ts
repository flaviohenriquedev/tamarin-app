import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloColaborador: ModulosType = {
    infos() {
        return {
            id: 'recursoshumanos-colaborador',
            modulo: ModuloENUM.GESTAO_ADMISSAO,
            title: 'Admissão',
            href: 'rh/colaborador',
            funcionalidades: this.funcionalidades(),
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([
            ...FuncionalidadeFactory.funcionalidadesPadrao()
        ])
    }
}
import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloDesligamento: ModulosType = {
    infos() {
        return {
            id: 'gestao-desligamento',
            modulo: ModuloENUM.GESTAO_DESLIGAMENTO,
            title: 'Desligamento',
            href: 'rh/colaborador',
            funcionalidades: this.funcionalidades()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()]);
    }
}
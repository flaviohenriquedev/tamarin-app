import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloFerias: ModulosType = {
    infos() {
        return {
            id: 'gestao-ferias',
            modulo: ModuloENUM.GESTAO_FERIAS,
            title: 'Férias',
            href: 'rh/colaborador',
            funcionalidades: this.funcionalidades!()
        };
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()]);
    }
}
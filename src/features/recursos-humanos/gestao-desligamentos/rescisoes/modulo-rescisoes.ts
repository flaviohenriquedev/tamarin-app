import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloRescisoes: ModulosType = {
    infos() {
        return {
            id: 'recursoshumanos-desligamentos-rescisoes',
            modulo: ModuloENUM.GESTAO_RESCISOES,
            title: 'Rescisões',
            href: '/app/rh/desligamento/rescisoes',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
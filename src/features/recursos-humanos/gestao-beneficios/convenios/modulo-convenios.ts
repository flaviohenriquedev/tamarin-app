import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloConvenios: ModulosType = {
    infos() {
        return {
            id: 'beneficios-convenios',
            modulo: ModuloENUM.GESTAO_CONVENIOS,
            title: 'Convênios',
            href: '/app/rh/beneficios/convenios',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
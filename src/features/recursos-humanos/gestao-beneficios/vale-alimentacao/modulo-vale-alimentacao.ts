import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloValeAlimentacao: ModulosType = {
    infos() {
        return {
            id: 'beneficios-vale-alimentacao',
            modulo: ModuloENUM.GESTAO_VALE_ALIMENTACAO,
            title: 'Vale Alimentação',
            href: '/app/rh/beneficios/vale-alimentacao',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
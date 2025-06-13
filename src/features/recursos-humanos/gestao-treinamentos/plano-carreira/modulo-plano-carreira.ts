import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloPlanoCarreira: ModulosType = {
    infos() {
        return {
            id: 'treinamentos-plano-carreira',
            modulo: ModuloENUM.GESTAO_PLANO_CARREIRA,
            title: 'Plano de Carreira',
            href: '/app/rh/treinamentos/plano-carreira',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
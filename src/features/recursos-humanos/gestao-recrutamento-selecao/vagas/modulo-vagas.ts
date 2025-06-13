import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloVagas: ModulosType = {
    infos() {
        return {
            id: 'recrutamento-selecao-vagas',
            modulo: ModuloENUM.GESTAO_VAGAS,
            title: 'Vagas',
            href: '/app/rh/recrutamento/vagas',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
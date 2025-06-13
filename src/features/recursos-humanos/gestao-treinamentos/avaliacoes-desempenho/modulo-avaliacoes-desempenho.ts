import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";

export const ModuloAvaliacoesDesempenho: ModulosType = {
    infos() {
        return {
            id: 'treinamentos-avaliacoes-desempenho',
            modulo: ModuloENUM.GESTAO_AVALIACOES_DESEMPENHO,
            title: 'Avaliações de Desempenho',
            href: '/app/rh/treinamentos/avaliacoes',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}
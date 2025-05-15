import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'AVALIACOES_DESEMPENHO'

export const ModuloAvaliacoesDesempenho: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'treinamentos-avaliacoes-desempenho',
            modulo: 'AVALIACOES_DESEMPENHO',
            title: 'Avaliações de Desempenho',
            href: '/rh/treinamentos/avaliacoes'
        }
    }
}
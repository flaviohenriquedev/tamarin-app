import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'SELECAO_CANDIDATOS'

export const ModuloSelecaoCandidatos: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recrutamento-selecao-candidatos',
            modulo: 'SELECAO_CANDIDATOS',
            title: 'Candidatos',
            href: '/rh/recrutamento/candidatos'
        }
    }
}
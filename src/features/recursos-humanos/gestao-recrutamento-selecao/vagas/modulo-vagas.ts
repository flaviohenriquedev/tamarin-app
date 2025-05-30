import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'VAGAS'

export const ModuloVagas: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recrutamento-selecao-vagas',
            modulo: 'VAGAS',
            title: 'Vagas',
            href: '/app/rh/recrutamento/vagas'
        }
    }
}
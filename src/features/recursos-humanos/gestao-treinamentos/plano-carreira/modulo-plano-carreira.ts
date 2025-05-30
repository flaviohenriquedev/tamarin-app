import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'PLANO_CARREIRA'

export const ModuloPlanoCarreira: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'treinamentos-plano-carreira',
            modulo: 'PLANO_CARREIRA',
            title: 'Plano de Carreira',
            href: '/app/rh/treinamentos/plano-carreira'
        }
    }
}
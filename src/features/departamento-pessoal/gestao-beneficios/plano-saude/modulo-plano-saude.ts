import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'PLANO_SAUDE'

export const ModuloPlanoSaude: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'beneficios-plano-saude',
            modulo: 'PLANO_SAUDE',
            title: 'Plano de Saúde',
            href: '/rh/beneficios/plano-saude'
        }
    }
}
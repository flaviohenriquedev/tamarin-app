import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'CONVENIOS'

export const ModuloConvenios: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'beneficios-convenios',
            modulo: 'CONVENIOS',
            title: 'Convênios',
            href: '/app/rh/beneficios/convenios'
        }
    }
}
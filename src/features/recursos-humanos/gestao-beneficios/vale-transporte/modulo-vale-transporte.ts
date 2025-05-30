import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'VALE_TRANSPORTE'

export const ModuloValeTransporte: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'beneficios-vale-transporte',
            modulo: 'VALE_TRANSPORTE',
            title: 'Vale Transporte',
            href: '/app/rh/beneficios/vale-transporte'
        };
    }
}
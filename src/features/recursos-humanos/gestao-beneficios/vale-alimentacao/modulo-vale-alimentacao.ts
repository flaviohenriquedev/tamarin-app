import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'VALE_ALIMENTACAO'

export const ModuloValeAlimentacao: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'beneficios-vale-alimentacao',
            modulo: 'VALE_ALIMENTACAO',
            title: 'Vale Alimentação',
            href: '/rh/beneficios/vale-alimentacao'
        }
    }
}
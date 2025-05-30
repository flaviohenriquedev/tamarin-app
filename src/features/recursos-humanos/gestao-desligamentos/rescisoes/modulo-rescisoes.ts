import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'RESCISOES'

export const ModuloRescisoes: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recursoshumanos-desligamentos-rescisoes',
            modulo: 'RESCISOES',
            title: 'Rescisões',
            href: '/app/rh/desligamento/rescisoes'
        }
    }
}
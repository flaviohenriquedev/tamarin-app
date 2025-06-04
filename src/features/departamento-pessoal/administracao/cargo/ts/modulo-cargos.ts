import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'DP-ADM-CARGOS'

export const ModuloCargos: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'dp-adm-cargos',
            modulo: 'DP-ADM-CARGOS',
            title: 'Cargos',
            href: '/app/dp/cargo'
        }
    }
}
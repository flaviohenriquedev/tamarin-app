import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'DP-ADM-SETORES'

export const ModuloSetores: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'dp-adm-setores',
            modulo: 'DP-ADM-SETORES',
            title: 'Setores',
            href: '/app/dp/setor'
        }
    }
}
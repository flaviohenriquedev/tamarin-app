import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'DP-ADM-CARGA-HORARIA'

export const ModuloCargaHoraria: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'dp-adm-carga-horaria',
            modulo: 'DP-ADM-CARGA-HORARIA',
            title: 'Carga Horária',
            href: '/app/dp/carga-horaria'
        }
    }
}
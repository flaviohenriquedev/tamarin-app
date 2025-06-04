import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'DP-ADM-TIPO-CONTRATO'

export const ModuloTipoContrato: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'dp-adm-setores',
            modulo: 'DP-ADM-TIPO-CONTRATO',
            title: 'Tipo Contrato',
            href: '/app/dp/tipo-contrato'
        }
    }
}
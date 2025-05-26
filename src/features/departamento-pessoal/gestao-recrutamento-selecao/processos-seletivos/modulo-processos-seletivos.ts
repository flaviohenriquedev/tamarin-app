import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'PROCESSOS_SELETIVOS'

export const ModuloProcessosSeletivos: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recrutamento-selecao-processos-seletivos',
            modulo: 'PROCESSOS_SELETIVOS',
            title: 'Processos Seletivos',
            href: '/rh/recrutamento/processos'
        }
    }
}
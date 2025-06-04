import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'DP-ADM-DEPARTAMENTOS'

export const ModuloDepartamentos: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recursoshumanos-desligamentos-rescisoes',
            modulo: 'DP-ADM-DEPARTAMENTOS',
            title: 'Departamentos',
            href: '/app/dp/departamento'
        }
    }
}
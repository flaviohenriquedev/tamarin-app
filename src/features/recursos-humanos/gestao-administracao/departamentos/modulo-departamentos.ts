import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'DEPARTAMENTOS'

export const ModuloDepartamentos: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recursoshumanos-administracao-dp-departamentos',
            modulo: 'DEPARTAMENTOS',
            title: 'Departamentos',
            href: '/rh/adm/departamento'
        }
    }
}
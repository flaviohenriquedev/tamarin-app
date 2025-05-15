import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulo = 'USUARIOS'

export const ModuloUsuarios: ModulosType<Modulo> = {
    infos() {
        return {
            id: 'recursoshumanos-administracao-usuarios',
            modulo: 'USUARIOS',
            title: 'Usuarios',
            href: '/manager/usuario'
        }
    }
}
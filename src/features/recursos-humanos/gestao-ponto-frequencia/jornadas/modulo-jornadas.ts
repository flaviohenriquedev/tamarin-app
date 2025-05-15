import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'JORNADAS'

export const ModuloJornadas: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'ponto-frequencia-jornadas',
            modulo: 'JORNADAS',
            title: 'Jornadas',
            href: '/rh/ponto/registro'
        };
    }
}
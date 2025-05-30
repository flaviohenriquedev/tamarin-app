import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'ESCALAS'

export const ModuloEscalas: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'ponto-frequencia-escalas',
            modulo: 'ESCALAS',
            title: 'Escalas',
            href: '/app/rh/ponto/escalas'
        };
    }
}
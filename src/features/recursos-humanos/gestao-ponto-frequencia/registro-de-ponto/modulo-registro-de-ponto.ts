import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'REGISTRO_DE_PONTO'

export const ModuloRegistroDePonto: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'ponto-frequencia-registro-ponto',
            modulo: 'REGISTRO_DE_PONTO',
            title: 'Registro de Ponto',
            href: '/rh/ponto/registro'
        };
    }
}
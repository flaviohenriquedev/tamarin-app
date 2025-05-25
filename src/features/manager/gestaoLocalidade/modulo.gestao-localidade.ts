import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'GESTAO_LOCALIDADE'

export const ModuloGestaoLocalidade: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'gerenciar-sistema-dominio-localidade',
            title: 'Localidade',
            modulo: 'GESTAO_LOCALIDADE',
            href: '/config/localidade',
        };
    }
}
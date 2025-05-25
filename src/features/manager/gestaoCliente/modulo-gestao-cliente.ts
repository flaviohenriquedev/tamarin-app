import {icones} from "@/components/common/icones";
import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'GESTAO_CLIENTE'

export const ModuloGestaoCliente: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'gerenciarsistema-clientes',
            title: 'Clientes',
            modulo: 'GESTAO_CLIENTE',
            icon: icones.empresa,
            href: '/config/clientes'
        };
    }
}
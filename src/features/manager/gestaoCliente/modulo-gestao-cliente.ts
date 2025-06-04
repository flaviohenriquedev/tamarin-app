import {icones} from "@/components/common/icones";
import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'CADASTRO_CLIENTE'

export const ModuloGestaoCliente: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'gerenciarsistema-[id]-clientes',
            title: 'Cadastro',
            modulo: 'CADASTRO_CLIENTE',
            icon: icones.empresa,
            href: 'config/clientes'
        };
    }
}
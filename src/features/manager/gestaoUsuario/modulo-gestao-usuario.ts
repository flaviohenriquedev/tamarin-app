import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'GESTAO_USUARIO'

export const ModuloGestaoUsuario: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'gerenciar-sistema-controle-acesso-usuarios',
            title: 'Usuarios',
            modulo: 'GESTAO_USUARIO',
            href: '/app/manager/usuario'
        };
    }
}
import {ModulosType} from "@/types/_root/ModulosTypes";

type Modulos = 'GESTAO_PERFIL'

export const ModuloGestoPerfil: ModulosType<Modulos> = {
    infos() {
        return {
            id: 'gerenciar-sistema-controle-acesso-perfis',
            title: 'Perfis',
            modulo: 'GESTAO_PERFIL',
            href: '/manager/perfis'
        };
    }
}
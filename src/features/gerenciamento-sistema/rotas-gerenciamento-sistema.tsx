import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";

export const rotasGerenciamentoSistema: RouteType[] = [
    {
        id: 'gerenciar-sistema-clientes',
        title: 'Clientes',
        icon: icones.empresa,
        href: '/config/clientes',
    },
    {
        id: 'gerenciar-sistema-controle-acesso',
        title: 'Controle de Acesso',
        icon: icones.usuario,
        subRoute: [
            {
                id: 'gerenciar-sistema-controle-acesso-perfis',
                title: 'Perfis',
                href: '/manager/perfis'
            },
            {
                id: 'gerenciar-sistema-controle-acesso-usuarios',
                title: 'Usuarios',
                href: '/manager/usuario'
            },
        ]
    },
    {
        id: 'gerenciar-sistema-dominio',
        title: 'Dominio',
        icon: icones.configGeral,
        subRoute: [
            {
                id: 'gerenciar-sistema-dominio-localidade',
                title: 'Localidade',
                href: '/config/localidade',
            }
        ]
    }
];
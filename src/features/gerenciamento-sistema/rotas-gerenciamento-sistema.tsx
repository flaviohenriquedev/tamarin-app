import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";

export const rotasGerenciamentoSistema: RouteType[] = [
    {
        title: 'Clientes',
        icon: icones.empresa,
        href: '/config/clientes',
    },
    {
        title: 'Usuarios',
        icon: icones.usuario,
        href: '/manager/usuario'
    },
    {
        title: 'Dominio',
        icon: icones.configGeral,
        subRoute: [
            {
                title: 'Localidade',
                href: '/config/localidade',
            }
        ]
    }
];
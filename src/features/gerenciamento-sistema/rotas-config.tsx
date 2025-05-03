import {icones} from "@/components/common/icones";
import {TRoute} from "@/types/TRoute";

export const rotasConfig: TRoute[] = [
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
        icon: icones.configuracaoGeral,
        subRoute: [
            {
                title: 'Localidade',
                href: '/config/localidade',
            }
        ]
    }
];
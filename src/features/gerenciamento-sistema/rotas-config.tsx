import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/RouteType";

export const rotasConfig: RouteType[] = [
    {
        title: 'Dominio',
        icon: icones.colaboradores,
        subRoute: [
            {
                title: 'Localidade',
                href: '/config/localidade',
            }
        ]
    },
];


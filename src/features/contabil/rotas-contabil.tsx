import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";

const baseRoute = '/contabil'
export const rotasContabil: RouteType[] = [
    {
        id: 'contabil-cadastro',
        title: 'Cadastro',
        icon: icones.colaboradores,
        href: `${baseRoute}/cadastro`,
    },
];
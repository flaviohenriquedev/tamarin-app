import {icones} from "@/components/common/icones";
import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {ReactNode} from "react";
import {RouteType} from "@/types/RouteType";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";

// const modulos = {
//     GERENCIAMENTOS: 'Gerenciamento do Sistema',
//     RECURSOS_HUMANOS: 'Recursos Humansos'
// }

export type ModuloType = {
    modulo: string,
    titulo: string,
    icone: ReactNode,
    descricao: string,
    href: string,
    destaque: boolean,
    rotas: RouteType[]
}

export const rotasSistema: ModuloType[] = [
    {
        modulo: 'GERENCIAMENTOS',
        titulo: 'Gerenciamento do Sistema',
        icone: <IoSettingsSharp size={45}/>,
        descricao: 'Acesse as Configurações gerais do sistema.',
        href: '/app/adm',
        destaque: true,
        rotas: [
            {
                title: 'Teste',
                icon: icones.colaboradores,
                href: '/adm/colaborador',
                breadcrumbRef: 'colaborador'
            }
        ]
    },
    {
        modulo: 'RECURSOS_HUMANOS',
        titulo: 'Recursos Humanos',
        icone: <HiUsers size={45}/>,
        descricao: 'Gerencie colaboradores, folhas de pagamento e mais.',
        href: '/app/rh',
        destaque: false,
        rotas: rotasRecursosHumanos
    }
]
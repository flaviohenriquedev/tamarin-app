import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {ReactNode} from "react";
import {TRoute} from "@/types/_root/TRoute";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {rotasConfig} from "@/features/gerenciamento-sistema/rotas-config";

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
    rotas: TRoute[],
}

export const rotasSistema: ModuloType[] = [
    {
        modulo: 'RECURSOS_HUMANOS',
        titulo: 'Recursos Humanos',
        icone: <HiUsers size={15}/>,
        descricao: 'Gerencie colaboradores, folhas de pagamento e mais.',
        href: '/rh',
        destaque: false,
        rotas: rotasRecursosHumanos
    },
    {
        modulo: 'GERENCIAMENTOS',
        titulo: 'Gerenciamento do Sistema',
        icone: <IoSettingsSharp size={15}/>,
        descricao: 'Acesse as Configurações gerais do sistema.',
        href: '/config',
        destaque: true,
        rotas: rotasConfig
    }
]
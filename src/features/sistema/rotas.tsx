import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {rotasGerenciamentoSistema} from "@/features/gerenciamento-sistema/rotas-gerenciamento-sistema";
import {SistemaType} from "@/features/sistema/types";

export const rotasSistema: SistemaType[] = [
    {
        sistema: {key: 'RECURSOS_HUMANOS', label: 'Recursos Humanos'},
        icone: <HiUsers size={15}/>,
        href: '/rh',
        destaque: false,
        rotas: rotasRecursosHumanos
    },
    {
        sistema: {key: 'GERENCIAMENTO_SISTEMA', label: 'Gerenciamento do Sistema'},
        icone: <IoSettingsSharp size={15}/>,
        href: '/config',
        destaque: true,
        rotas: rotasGerenciamentoSistema
    }
]
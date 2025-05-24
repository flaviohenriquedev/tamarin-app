import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {rotasGerenciamentoSistema} from "@/features/gerenciamento-sistema/rotas-gerenciamento-sistema";
import {SistemaType} from "@/features/sistema/types";
import {ChartNoAxesCombined} from "lucide-react";
import {rotasContabil} from "@/features/contabil/rotas-contabil";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";

const sizeIcon = 20
export const rotasSistema: SistemaType[] = [
    {
        sistema: SistemaENUM.RECURSOS_HUMANOS,
        sistemaMaster: false,
        icone: <HiUsers size={sizeIcon}/>,
        href: '/rh',
        destaque: false,
        rotas: rotasRecursosHumanos
    },
    {
        sistema: SistemaENUM.CONTABIL,
        sistemaMaster: false,
        icone: <ChartNoAxesCombined size={sizeIcon}/>,
        href: '/contabil',
        destaque: true,
        rotas: rotasContabil
    },
    {
        sistema: SistemaENUM.GERENCIAR_SISTEMA,
        sistemaMaster: true,
        icone: <IoSettingsSharp size={sizeIcon}/>,
        href: '/config',
        destaque: true,
        rotas: rotasGerenciamentoSistema
    }
]
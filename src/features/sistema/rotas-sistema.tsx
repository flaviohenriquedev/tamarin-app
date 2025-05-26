import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {rotasGerenciamentoSistema} from "@/features/manager/rotas-gerenciamento-sistema";
import {SistemaType} from "@/features/sistema/types";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {rotasDepartamentoPessoal} from "@/features/departamento-pessoal/rotas-departamento-pessoal";
import {Briefcase} from "lucide-react";

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
        sistema: SistemaENUM.DEPARTAMENTO_PESSOAL,
        sistemaMaster: false,
        icone: <Briefcase size={sizeIcon}/>,
        href: '/rh',
        destaque: false,
        rotas: rotasDepartamentoPessoal
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
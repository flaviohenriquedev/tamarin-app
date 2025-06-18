'use client'

import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {rotasGerenciamentoSistema} from "@/features/manager/rotasGerenciamentoSistema";
import {SistemaType} from "@/features/sistema/types";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {rotasDepartamentoPessoal} from "@/features/departamento-pessoal/rotasDepartamentoPessoal";
import {Briefcase} from "lucide-react";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";

const sizeIcon = 20
export const sistemasModulosMaster: SistemaType[] = [
    {
        sistema: SistemaENUM.GERENCIAR_SISTEMA,
        sistemaMaster: true,
        icone: <IoSettingsSharp size={sizeIcon}/>,
        href: '/app/manager',
        destaque: true,
        rotas: rotasGerenciamentoSistema
    }
]

export const sistemasModulos: SistemaType[] = [
    {
        sistema: SistemaENUM.RECURSOS_HUMANOS,
        sistemaMaster: false,
        icone: <HiUsers size={sizeIcon}/>,
        href: '/app/rh',
        destaque: false,
        rotas: rotasRecursosHumanos
    },
    {
        sistema: SistemaENUM.DEPARTAMENTO_PESSOAL,
        sistemaMaster: false,
        icone: <Briefcase size={sizeIcon}/>,
        href: '/app/rh',
        destaque: false,
        rotas: rotasDepartamentoPessoal
    }
]
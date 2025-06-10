'use client'

import {IoSettingsSharp} from "react-icons/io5";
import {HiUsers} from "react-icons/hi2";
import {rotasRecursosHumanos} from "@/features/recursos-humanos/rotas-recursos-humanos";
import {rotasGerenciamentoSistema} from "@/features/manager/rotasGerenciamentoSistema";
import {SistemaType} from "@/features/sistema/types";
import {SistemaENUM} from "@/features/sistema/enums/SistemaENUM";
import {rotasDepartamentoPessoal} from "@/features/departamento-pessoal/rotasDepartamentoPessoal";
import {Briefcase} from "lucide-react";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {Usuario} from "@/features/manager/gestaoUsuario/usuario/ts/usuario";

const sizeIcon = 20
const dadosSistemas: SistemaType[] = [
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
    },
    {
        sistema: SistemaENUM.GERENCIAR_SISTEMA,
        sistemaMaster: true,
        icone: <IoSettingsSharp size={sizeIcon}/>,
        href: '/app/manager',
        destaque: true,
        rotas: rotasGerenciamentoSistema
    }
]

export function useDadosSistemas(): SistemaType[] {
    const {sistemasEnumUsuarioLogado, modulosEnumUsuarioLogado, usuarioLogado} = useUsuarioLogado();

    return filtrarDadosSistemaPorUsuarioLogado(sistemasEnumUsuarioLogado, modulosEnumUsuarioLogado, usuarioLogado)
}

function filtrarDadosSistemaPorUsuarioLogado(
    sistemasEnumUsuarioLogado: SistemaENUM[],
    modulosEnumUsuarioLogado: ModuloENUM[],
    usuarioLogado: Usuario
): SistemaType[] {

    if (usuarioLogado.usuarioMaster) {
        return dadosSistemas;
    }

    return dadosSistemas
        .filter(ds => sistemasEnumUsuarioLogado.includes(ds.sistema))
        .map(ds => {
            const rotasFiltradas = ds.rotas.filter(rota =>
                !rota.modulo || modulosEnumUsuarioLogado.includes(rota.modulo)
            );

            return {
                ...ds,
                rotas: rotasFiltradas
            };
        })
        .filter(ds => ds.rotas.length > 0); // Só retorna sistemas com ao menos uma rota permitida
}

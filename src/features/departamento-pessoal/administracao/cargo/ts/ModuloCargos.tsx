'use client'

import {ModulosType} from "@/types/_root/ModulosTypes";
import {ModuloENUM} from "@/enums/ModuloEnum";
import {FuncionalidadeFactory} from "@/enums/FuncionalidadeEnum";
import {useUsuarioLogado} from "@/features/manager/gestaoUsuario/usuario/context/usuario-context";

const ModuloCargos: ModulosType = {
    infos() {
        return {
            id: 'dp-adm-cargos',
            modulo: ModuloENUM.GESTAO_CARGOS,
            title: 'Cargos',
            href: '/app/dp/cargo',
            funcionalidades: this.funcionalidades()
        }
    },
    funcionalidades() {
        return FuncionalidadeFactory.getFuncionalidades([...FuncionalidadeFactory.funcionalidadesPadrao()])
    }
}

export function ModuloCargosT() {
    const {modulosEnumUsuarioLogado} = useUsuarioLogado();
    return filtrarModoluPorUsuarioLogado(modulosEnumUsuarioLogado, ModuloCargos)
}

function filtrarModoluPorUsuarioLogado(modulosUsuarioLogado: ModuloENUM[], modulo: ModulosType): ModulosType | undefined {
    if (modulosUsuarioLogado.includes(modulo.infos().modulo)) return modulo;
}
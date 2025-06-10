import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";
import {ModuloGestaoEmpresa} from "@/features/manager/gestaoEmpresa/modulo-gestao-empresa";
import {ModuloGestoPerfil} from "@/features/manager/gestaoPerfil/modulo-gestao-perfil";
import {ModuloGestaoUsuario} from "@/features/manager/gestaoUsuario/modulo-gestao-usuario";
import {ModuloGestaoLocalidade} from "@/features/manager/gestaoLocalidade/modulo.gestao-localidade";

export const rotasGerenciamentoSistema: RouteType[] = [
    {
        id: 'gerenciar-sistema-empresas',
        title: 'Empresas',
        icon: icones.empresa,
        subRoute: [
            ModuloGestaoEmpresa.infos(),
        ]
    },
    {
        id: 'gerenciar-sistema-controle-acesso',
        title: 'Controle de Acesso',
        icon: icones.usuario,
        subRoute: [
            ModuloGestoPerfil.infos(),
            ModuloGestaoUsuario.infos()
        ]
    },
    {
        id: 'gerenciar-sistema-dominio',
        title: 'Dominio',
        icon: icones.configGeral,
        subRoute: [
            ModuloGestaoLocalidade.infos(),
        ]
    }
];
import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";
import {ModuloGestaoEmpresa} from "@/features/manager/gestaoEmpresa/modulo-gestao-empresa";
import {ModuloGestaoLocalidade} from "@/features/manager/gestaoLocalidade/moduloGestaoLocalidade";

export const rotasGerenciamentoSistema: RouteType[] = [
    {
        id: 'gerenciar-sistema-empresas',
        title: 'Empresas',
        icon: icones.empresa(),
        subRoute: [
            ModuloGestaoEmpresa.infos(),
        ]
    },
    {
        id: 'gerenciar-sistema-dominio',
        title: 'Dominio',
        icon: icones.configGeral(),
        subRoute: [
            ModuloGestaoLocalidade.infos(),
        ]
    }
];
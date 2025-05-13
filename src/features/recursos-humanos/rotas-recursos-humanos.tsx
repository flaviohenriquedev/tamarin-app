import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";
import {ModuloColaborador} from "@/features/recursos-humanos/gestao-colaborador/modulo-colaborador";
import {ModuloEventos} from "@/features/recursos-humanos/gestao-folha-pagamento/eventos/modulo-eventos";
import {ModuloLancamentos} from "@/features/recursos-humanos/gestao-folha-pagamento/lancamentos/modulo-lancamentos";

export const rotasRecursosHumanos: RouteType[] = [
    ModuloColaborador.infos(),
    {
        id: 'recursoshumanos-folha-pagamento',
        title: 'Folha de Pagamento',
        icon: icones.folhaPagamento,
        subRoute: [
            ModuloEventos.infos(),
            ModuloLancamentos.infos()
        ]
    },
];


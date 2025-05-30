import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";
import {ModuloEventos} from "@/features/recursos-humanos/gestao-folha-pagamento/eventos/modulo-eventos";
import {ModuloLancamentos} from "@/features/recursos-humanos/gestao-folha-pagamento/lancamentos/modulo-lancamentos";
import {
    ModuloContraCheque
} from "@/features/recursos-humanos/gestao-folha-pagamento/contra-cheque/modulo-contra-cheque";
import {
    ModuloRegistroDePonto
} from "@/features/recursos-humanos/gestao-ponto-frequencia/registro-de-ponto/modulo-registro-de-ponto";
import {ModuloJornadas} from "@/features/recursos-humanos/gestao-ponto-frequencia/jornadas/modulo-jornadas";
import {ModuloEscalas} from "@/features/recursos-humanos/gestao-ponto-frequencia/escalas/modulo-escalas";
import {
    ModuloValeTransporte
} from "@/features/recursos-humanos/gestao-beneficios/vale-transporte/modulo-vale-transporte";
import {
    ModuloValeAlimentacao
} from "@/features/recursos-humanos/gestao-beneficios/vale-alimentacao/modulo-vale-alimentacao";
import {ModuloPlanoSaude} from "@/features/recursos-humanos/gestao-beneficios/plano-saude/modulo-plano-saude";
import {ModuloConvenios} from "@/features/recursos-humanos/gestao-beneficios/convenios/modulo-convenios";
import {ModuloRescisoes} from "@/features/recursos-humanos/gestao-desligamentos/rescisoes/modulo-rescisoes";
import {ModuloColaborador} from "@/features/departamento-pessoal/gestao-colaborador/modulo-colaborador";

export const rotasDepartamentoPessoal: RouteType[] = [
    {
        id: 'dp-colaborador',
        title: 'Colaborador',
        icon: icones.colaboradores,
        subRoute: [
            ModuloColaborador.infos(),
        ]
    },
    {
        id: 'dp-folha-pagamento',
        title: 'Folha de Pagamento',
        icon: icones.folhaPagamento,
        subRoute: [
            ModuloLancamentos.infos(),
            ModuloEventos.infos(),
            ModuloContraCheque.infos()
        ]
    },
    {
        id: 'dp-ponto-frequencia',
        title: 'Ponto e Frequência',
        icon: icones.pontoFrequencia,
        subRoute: [
            ModuloRegistroDePonto.infos(),
            ModuloJornadas.infos(),
            ModuloEscalas.infos(),
        ]
    },
    {
        id: 'dp-beneficios',
        title: 'Benefícios',
        icon: icones.beneficios,
        subRoute: [
            ModuloValeTransporte.infos(),
            ModuloValeAlimentacao.infos(),
            ModuloPlanoSaude.infos(),
            ModuloConvenios.infos(),
        ]
    },
    {
        id: 'dp-desligamentos',
        title: 'Desligamentos',
        icon: icones.desligamentos,
        subRoute: [
            ModuloRescisoes.infos()
        ]
    }
];


import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";
import {ModuloColaborador} from "@/features/recursos-humanos/gestao-colaborador/modulo-colaborador";
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
import {ModuloCursos} from "@/features/recursos-humanos/gestao-treinamentos/cursos/modulo-cursos";
import {
    ModuloAvaliacoesDesempenho
} from "@/features/recursos-humanos/gestao-treinamentos/avaliacoes-desempenho/modulo-avaliacoes-desempenho";
import {
    ModuloPlanoCarreira
} from "@/features/recursos-humanos/gestao-treinamentos/plano-carreira/modulo-plano-carreira";
import {ModuloVagas} from "@/features/recursos-humanos/gestao-recrutamento-selecao/vagas/modulo-vagas";
import {
    ModuloSelecaoCandidatos
} from "@/features/recursos-humanos/gestao-recrutamento-selecao/selecao-candidatos/modulo-selecao-candidatos";
import {
    ModuloProcessosSeletivos
} from "@/features/recursos-humanos/gestao-recrutamento-selecao/processos-seletivos/modulo-processos-seletivos";
import {ModuloRescisoes} from "@/features/recursos-humanos/gestao-desligamentos/rescisoes/modulo-rescisoes";
import {ModuloDepartamentos} from "@/features/recursos-humanos/gestao-administracao/departamentos/modulo-departamentos";
import {ModuloUsuarios} from "@/features/manager/usuario/ts/modulo-usuario";

export const rotasRecursosHumanos: RouteType[] = [
    ModuloColaborador.infos(),
    {
        id: 'recursoshumanos-folha-pagamento',
        title: 'Folha de Pagamento',
        icon: icones.folhaPagamento,
        subRoute: [
            ModuloEventos.infos(),
            ModuloLancamentos.infos(),
            ModuloContraCheque.infos()
        ]
    },
    {
        id: 'recursoshumanos-ponto-frequencia',
        title: 'Ponto e Frequência',
        icon: icones.pontoFrequencia,
        subRoute: [
            ModuloRegistroDePonto.infos(),
            ModuloJornadas.infos(),
            ModuloEscalas.infos()
        ]
    },
    {
        id: 'recursoshumanos-beneficios',
        title: 'Benefícios',
        icon: icones.beneficios,
        subRoute: [
            ModuloValeTransporte.infos(),
            ModuloValeAlimentacao.infos(),
            ModuloPlanoSaude.infos(),
            ModuloConvenios.infos()
        ]
    },
    {
        id: 'recursoshumanos-treinamentos',
        title: 'Treinamentos',
        icon: icones.treinamentos,
        subRoute: [
            ModuloCursos.infos(),
            ModuloAvaliacoesDesempenho.infos(),
            ModuloPlanoCarreira.infos()
        ]
    },
    {
        id: 'recursoshumanos-recrutamento-selecao',
        title: 'Recrutamento e Seleção',
        icon: icones.recrutamentoSelecao,
        subRoute: [
            ModuloVagas.infos(),
            ModuloSelecaoCandidatos.infos(),
            ModuloProcessosSeletivos.infos()
        ]
    },
    {
        id: 'recursoshumanos-desligamentos',
        title: 'Desligamentos',
        icon: icones.desligamentos,
        subRoute: [
            ModuloRescisoes.infos()
        ]
    },
    {
        id: 'recursoshumanos-administracao',
        title: 'Administração',
        icon: icones.administracao,
        subRoute: [
            ModuloDepartamentos.infos(),
            ModuloUsuarios.infos()
        ]
    },
];


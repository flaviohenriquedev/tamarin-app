import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";
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

export const rotasRecursosHumanos: RouteType[] = [
    {
        id: 'rh-treinamentos',
        title: 'Treinamentos',
        icon: icones.treinamentos,
        subRoute: [
            ModuloCursos.infos(),
            ModuloAvaliacoesDesempenho.infos(),
            ModuloPlanoCarreira.infos(),
        ]
    },
    {
        id: 'rh-recrutamento-selecao',
        title: 'Recrutamento e Seleção',
        icon: icones.recrutamentoSelecao,
        subRoute: [
            ModuloVagas.infos(),
            ModuloSelecaoCandidatos.infos(),
            ModuloProcessosSeletivos.infos(),
        ]
    }
];


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
import {ModuloDepartamentos} from "@/features/departamento-pessoal/administracao/departamento/ts/modulo-departamentos";
import {ModuloSetores} from "@/features/departamento-pessoal/administracao/setores/ts/modulo-setores";
import {ModuloCargos} from "@/features/departamento-pessoal/administracao/cargo/ts/modulo-cargos";
import {ModuloTipoContrato} from "@/features/departamento-pessoal/administracao/tipo-contrato/modulo-tipo-contrato";
import {ModuloCargaHoraria} from "@/features/departamento-pessoal/administracao/carga-horaria/ts/modulo-carga-horaria";
import {ModuloGestoPerfil} from "@/features/manager/gestaoPerfil/modulo-gestao-perfil";
import {ModuloGestaoUsuario} from "@/features/manager/gestaoUsuario/modulo-gestao-usuario";
import {
    ModuloColaboradores
} from "@/features/departamento-pessoal/gestao/gestao-colaboradores/_main/ts/moduloColaboradores";

export const rotasDepartamentoPessoal: RouteType[] = [
    {
        id: 'dp-gestao',
        title: 'Gestão',
        icon: icones.colaboradores,
        subRoute: [
            ModuloColaboradores.infos()
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
    },
    {
        id: 'dp-administracao',
        title: 'Administração',
        icon: icones.administracao,
        subRoute: [
            ModuloCargos.infos(),
            ModuloDepartamentos.infos(),
            ModuloSetores.infos(),
            ModuloTipoContrato.infos(),
            ModuloCargaHoraria.infos()
        ]
    },
    {
        id: 'dp-controle-acesso',
        title: 'Controle de Acesso',
        icon: icones.usuario,
        subRoute: [
            ModuloGestoPerfil.infos(),
            ModuloGestaoUsuario.infos()
        ]
    },
];


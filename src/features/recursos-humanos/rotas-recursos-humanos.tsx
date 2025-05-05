import {icones} from "@/components/common/icones";
import {TRoute} from "@/types/TRoute";

export const rotasRecursosHumanos: TRoute[] = [
    {
        title: 'Colaborador',
        icon: icones.colaboradores,
        href: '/rh/colaborador'
    },
    {
        title: 'Folha de Pagamento',
        icon: icones.folhaPagamento,
        subRoute: [
            {
                title: 'Lançamentos',
                href: '/rh/folha-pagamento/lancamentos'
            },
            {
                title: 'Eventos',
                href: '/rh/folha/eventos'
            },
            {
                title: 'Contra-cheques',
                href: '/rh/folha/contra-cheques'
            }
        ]
    },
    {
        title: 'Ponto e Frequência',
        icon: icones.pontoFrequencia,
        subRoute: [
            {
                title: 'Registro de Ponto',
                href: '/rh/ponto/registro'
            },
            {
                title: 'Espelho de Ponto',
                href: '/rh/ponto/espelho'
            },
            {
                title: 'Jornadas',
                href: '/rh/ponto/jornada'
            },
            {
                title: 'Escalas',
                href: '/rh/ponto/escala'
            }
        ]
    },
    {
        title: 'Benefícios',
        icon: icones.beneficios,
        subRoute: [
            {
                title: 'Vale Transporte',
                href: '/rh/beneficios/vale-transporte'
            },
            {
                title: 'Vale Alimentação',
                href: '/rh/beneficios/vale-alimentacao'
            },
            {
                title: 'Plano de Saúde',
                href: '/rh/beneficios/plano-saude'
            },
            {
                title: 'Convênios',
                href: '/rh/beneficios/convenios'
            }
        ]
    },
    {
        title: 'Treinamentos',
        icon: icones.treinamentos,
        subRoute: [
            {
                title: 'Cursos',
                href: '/rh/treinamentos/cursos'
            },
            {
                title: 'Avaliações de Desempenho',
                href: '/rh/treinamentos/avaliacoes'
            },
            {
                title: 'Plano de Carreira',
                href: '/rh/treinamentos/plano-carreira'
            }
        ]
    },
    {
        title: 'Recrutamento e Seleção',
        icon: icones.recrutamentoSelecao,
        subRoute: [
            {
                title: 'Vagas',
                href: '/rh/recrutamento/vagas'
            },
            {
                title: 'Candidatos',
                href: '/rh/recrutamento/candidatos'
            },
            {
                title: 'Processos Seletivos',
                href: '/rh/recrutamento/processos'
            }
        ]
    },
    {
        title: 'Desligamentos',
        icon: icones.desligamentos,
        subRoute: [
            {
                title: 'Rescisões',
                href: '/rh/desligamento/rescisoes'
            },
            {
                title: 'Entrevistas de Saída',
                href: '/rh/desligamento/entrevistas'
            }
        ]
    },
    {
        title: 'Administração',
        icon: icones.administracao,
        subRoute: [
            {
                title: 'Departamentos',
                href: '/rh/adm/departamento'
            },
            {
                title: 'Usuarios',
                href: '/manager/usuario'
            },
        ]
    },
];


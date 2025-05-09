import {icones} from "@/components/common/icones";
import {RouteType} from "@/types/_root/RouteType";

export const rotasRecursosHumanos: RouteType[] = [
    {
        id: 'recursoshumanos-colaborador',
        title: 'Colaborador',
        icon: icones.colaboradores,
        href: '/rh/colaborador'
    },
    {
        id: 'recursoshumanos-folha-pagamento',
        title: 'Folha de Pagamento',
        icon: icones.folhaPagamento,
        subRoute: [
            {
                id: 'recursoshumanos-folha-pagamento-lancamentos',
                title: 'Lançamentos',
                href: '/rh/folha-pagamento/lancamentos'
            },
            {
                id: 'recursoshumanos-folha-pagamento-eventos',
                title: 'Eventos',
                href: '/rh/folha-pagamento/eventos'
            },
        ]
    },
    {
        id: 'recursoshumanos-ponto-frequencia',
        title: 'Ponto e Frequência',
        icon: icones.pontoFrequencia,
        subRoute: [
            {
                id: 'recursoshumanos-ponto-frequencia-registro-ponto',
                title: 'Registro de Ponto',
                href: '/rh/ponto/registro'
            },
            {
                id: 'recursoshumanos-ponto-frequencia-espelho-ponto',
                title: 'Espelho de Ponto',
                href: '/rh/ponto/espelho'
            },
            {
                id: 'recursoshumanos-ponto-frequencia-jornadas',
                title: 'Jornadas',
                href: '/rh/ponto/jornada'
            },
            {
                id: 'recursoshumanos-ponto-frequencia-escalas',
                title: 'Escalas',
                href: '/rh/ponto/escala'
            }
        ]
    },
    {
        id: 'recursoshumanos-beneficios',
        title: 'Benefícios',
        icon: icones.beneficios,
        subRoute: [
            {
                id: 'recursoshumanos-beneficios-vale-transporte',
                title: 'Vale Transporte',
                href: '/rh/beneficios/vale-transporte'
            },
            {
                id: 'recursoshumanos-beneficios-vale-alimentacao',
                title: 'Vale Alimentação',
                href: '/rh/beneficios/vale-alimentacao'
            },
            {
                id: 'recursoshumanos-beneficios-plano-saude',
                title: 'Plano de Saúde',
                href: '/rh/beneficios/plano-saude'
            },
            {
                id: 'recursoshumanos-beneficios-convenios',
                title: 'Convênios',
                href: '/rh/beneficios/convenios'
            }
        ]
    },
    {
        id: 'recursoshumanos-treinamentos',
        title: 'Treinamentos',
        icon: icones.treinamentos,
        subRoute: [
            {
                id: 'recursoshumanos-treinamentos-cursos',
                title: 'Cursos',
                href: '/rh/treinamentos/cursos'
            },
            {
                id: 'recursoshumanos-treinamentos-avaliacoes-desempenho',
                title: 'Avaliações de Desempenho',
                href: '/rh/treinamentos/avaliacoes'
            },
            {
                id: 'recursoshumanos-treinamentos-plano-carreira',
                title: 'Plano de Carreira',
                href: '/rh/treinamentos/plano-carreira'
            }
        ]
    },
    {
        id: 'recursoshumanos-recrutamento-selecao',
        title: 'Recrutamento e Seleção',
        icon: icones.recrutamentoSelecao,
        subRoute: [
            {
                id: 'recursoshumanos-recrutamento-selecao-vagas',
                title: 'Vagas',
                href: '/rh/recrutamento/vagas'
            },
            {
                id: 'recursoshumanos-recrutamento-selecao-candidatos',
                title: 'Candidatos',
                href: '/rh/recrutamento/candidatos'
            },
            {
                id: 'recursoshumanos-recrutamento-selecao-processos-seletivos',
                title: 'Processos Seletivos',
                href: '/rh/recrutamento/processos'
            }
        ]
    },
    {
        id: 'recursoshumanos-desligamentos',
        title: 'Desligamentos',
        icon: icones.desligamentos,
        subRoute: [
            {
                id: 'recursoshumanos-desligamentos-rescisoes',
                title: 'Rescisões',
                href: '/rh/desligamento/rescisoes'
            }
        ]
    },
    {
        id: 'recursoshumanos-administracao',
        title: 'Administração',
        icon: icones.administracao,
        subRoute: [
            {
                id: 'recursoshumanos-administracao-departamentos',
                title: 'Departamentos',
                href: '/rh/adm/departamento'
            },
            {
                id: 'recursoshumanos-administracao-usuarios',
                title: 'Usuarios',
                href: '/manager/usuario'
            },
        ]
    },
];


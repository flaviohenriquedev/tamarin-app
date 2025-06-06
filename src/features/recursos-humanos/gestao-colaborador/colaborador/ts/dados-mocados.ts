import {
    StatusColaboradorENUM
} from "@/features/recursos-humanos/gestao-colaborador/colaborador/ts/status-colaborador-e-n-u-m";

type CargoType = {
    profissao: string,
    departamento: string,
    dataAdmissao: string,
}

export class ColaboradorMockado {
    key: string;
    nome: string;
    status: StatusColaboradorENUM;
    cpf: string;
    rg: string;
    cargo: CargoType;
    fotoPerfil: string;
}

export const colaboradores: ColaboradorMockado[] = [
    {
        key: Math.random().toString(36),
        nome: 'Mariano Ribeiro Albuquerque',
        status: StatusColaboradorENUM.ATIVO,
        cpf: '369.951.248-40',
        rg: '32.189.945-5',
        cargo: {
            profissao: "Programador",
            departamento: "T.I.",
            dataAdmissao: "01/01/2020"
        },
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/2@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Patrícia Ribeiro Guimarães',
        status: StatusColaboradorENUM.ATIVO,
        cpf: '172.689.005-80',
        rg: '17.885.634-2',
        cargo: {
            profissao: "Gerente de R.H.",
            departamento: "Recursos Humanos",
            dataAdmissao: "01/03/2020"
        },
        fotoPerfil: 'https://img.daisyui.com/images/profile/demo/3@94.webp'
    },
    {
        key: Math.random().toString(36),
        nome: 'Maria Abadia de Sousa',
        status: StatusColaboradorENUM.FERIAS,
        cpf: '458.236.987-12',
        rg: '25.741.963-7',
        cargo: {
            profissao: "Recepcionista",
            departamento: "Recepção",
            dataAdmissao: "10/05/2019"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/108.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'João Pedro Carvalho',
        status: StatusColaboradorENUM.AFASTADO,
        cpf: '334.784.122-95',
        rg: '11.389.007-4',
        cargo: {
            profissao: "Analista de Sistemas",
            departamento: "T.I.",
            dataAdmissao: "15/08/2021"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/92.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Amanda Silva Costa',
        status: StatusColaboradorENUM.ATIVO,
        cpf: '241.888.334-07',
        rg: '18.963.247-0',
        cargo: {
            profissao: "Designer Gráfico",
            departamento: "Marketing",
            dataAdmissao: "02/11/2022"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/125.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Carlos Eduardo Martins',
        status: StatusColaboradorENUM.DESLIGADO,
        cpf: '319.067.758-26',
        rg: '19.284.741-8',
        cargo: {
            profissao: "Auxiliar de Logística",
            departamento: "Logística",
            dataAdmissao: "20/02/2018"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/80.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Patrícia Oliveira Mendes',
        status: StatusColaboradorENUM.FERIAS,
        cpf: '083.291.754-60',
        rg: '22.998.005-3',
        cargo: {
            profissao: "Coordenadora Financeira",
            departamento: "Financeiro",
            dataAdmissao: "03/06/2017"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/95.jpg'
    },
    {
        key: Math.random().toString(36),
        nome: 'Rafael Nunes Batista',
        status: StatusColaboradorENUM.ATIVO,
        cpf: '525.719.643-91',
        rg: '15.604.730-6',
        cargo: {
            profissao: "Técnico de Suporte",
            departamento: "T.I.",
            dataAdmissao: "12/09/2023"
        },
        fotoPerfil: 'https://mighty.tools/mockmind-api/content/human/91.jpg'
    },
    // 10 novos colaboradores gerados aleatoriamente
    ...Array.from({ length: 10 }).map((_, i) => ({
        key: Math.random().toString(36),
        nome: `Colaborador Exemplo ${i + 1}`,
        status: Object.values(StatusColaboradorENUM)[i % 4],
        cpf: `${Math.floor(100 + Math.random() * 900)}.${Math.floor(100 + Math.random() * 900)}.${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}`,
        rg: `${Math.floor(10 + Math.random() * 90)}.${Math.floor(100 + Math.random() * 900)}.${Math.floor(100 + Math.random() * 900)}-${Math.floor(0 + Math.random() * 9)}`,
        cargo: {
            profissao: "Funcionário",
            departamento: "Geral",
            dataAdmissao: "01/01/2021"
        },
        fotoPerfil: `https://mighty.tools/mockmind-api/content/human/${50 + i}.jpg`
    }))
] as const;

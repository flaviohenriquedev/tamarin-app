type FuncionalidadeTypeDetail =  {label: string}

type FuncionalidadesType = {
    CONSULTAR?: FuncionalidadeTypeDetail;
    ALTERAR?: FuncionalidadeTypeDetail;
    EXCLUIR?: FuncionalidadeTypeDetail;
} & {
    [key: string]: FuncionalidadeTypeDetail;
};

const funcionalidadesBasicas: FuncionalidadesType = {
    CONSULTAR: {
        label: 'Consultar'
    },
    ALTERAR: {
        label: 'Alterar',
    },
    EXCLUIR: {
        label: 'Excluir',
    }
}

export const funcionalidades: FuncionalidadesType = {
    ...funcionalidadesBasicas,
}
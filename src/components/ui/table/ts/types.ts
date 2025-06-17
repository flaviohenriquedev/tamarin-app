export type AcoesTabela<E> = {
    consultar?: (e: E) => void;
    excluir?: (e: E) => void
}

export type PageConfig = {
    take: number;
    skip: number;
    setSkip: (n: number) => void;
    setTake: (n: number) => void;
    totalRegistros: number
}
export type AcoesTabela<E> = {
    consultar?: (e: E) => void;
    excluir?: (e: E) => void
}
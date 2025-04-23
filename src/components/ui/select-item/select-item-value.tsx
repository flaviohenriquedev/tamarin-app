type Props = {
    valor: string,
    setItemSelecionado: (valor: string) => void,
}

export function SelectItemValue({valor, setItemSelecionado}: Props) {

    return (
        <li className={`px-3 py-2 hover:cursor-default hover:bg-[#1A1A1A]`} onClick={() => setItemSelecionado(valor)}>
            {valor}
        </li>
    )
}
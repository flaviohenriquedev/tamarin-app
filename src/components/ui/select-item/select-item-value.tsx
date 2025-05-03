import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

type Props = {
    valor: TSelectItem,
    setItemSelecionado: (valor: TSelectItem) => void,
}

export function SelectItemValue({valor, setItemSelecionado}: Props) {

    return (
        <li className={`px-3 py-1 hover:cursor-default hover:bg-base-300`}
            onClick={() => setItemSelecionado(valor)}>
            {valor.label}
        </li>
    )
}
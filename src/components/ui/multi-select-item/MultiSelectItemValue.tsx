import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

type Props = {
    valor: TSelectItem,
    setItemSelecionado?: (valor: TSelectItem) => void,
}

export function MultiSelectItemValue({valor, setItemSelecionado}: Props) {

    return (
        <li className={`
                px-3
                py-2
                transition-all
                duration-200
                hover:cursor-default
                hover:bg-primary
                hover:font-semibold
                hover:text-primary-content
                rounded-lg`}
            onClick={() => setItemSelecionado(valor)}>
            {valor.label}
        </li>
    )
}
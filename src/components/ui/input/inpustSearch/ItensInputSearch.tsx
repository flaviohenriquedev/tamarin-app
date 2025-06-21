import {EntidadePadrao} from "@/class/EntidadePadrao";
import {get} from "lodash";

type Props<E extends EntidadePadrao> = {
    entidade: E,
    fieldLabel: string;
    setItemSelecionado: (entidade: E) => void,
}

export function ItensInputSearch<E extends EntidadePadrao>({entidade, fieldLabel, setItemSelecionado}: Props<E>) {

    function getLabel() {
        return get(entidade, fieldLabel)
    }

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
            onClick={() => setItemSelecionado(entidade)}>
            {getLabel()}
        </li>
    )
}
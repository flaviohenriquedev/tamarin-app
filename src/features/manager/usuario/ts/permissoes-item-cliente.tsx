import {useState} from "react";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

type Props = {
    destacar: boolean,
    cliente: Cliente,
    onClick: (cliente: Cliente) => void
}

export function PermissoesItemCliente({ destacar, cliente, onClick }: Props) {

    const [clienteChecked, setClienteChecked] = useState<boolean>(false)

    return (
        <li className={`
                flex
                items-center
                gap-2
                p-2
                cursor-default
                border-2
               rounded-md
               ${destacar ? `
                    bg-primary/15
                    border-primary
                    text-base-content
               ` : 'hover:bg-base-100 border-transparent text-gray-400'}
                `}
            onClick={() => onClick(cliente)}>
            <input type="checkbox"
                   checked={clienteChecked}
                   className="cursor-default checkbox checkbox-xs"
                   onChange={() => setClienteChecked(!clienteChecked)}

            />
            <label>{cliente.nomeFantasia}</label>
        </li>
    )
}
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";

type Props = {
    destacar?: boolean
    cliente: Cliente
    onClick: (cliente: Cliente) => void;
}

export function ComponentePerfilClienteItem({ destacar, cliente, onClick }: Props) {
    return (
        <li className={`
                flex
                items-center
                gap-2
                p-2
                cursor-default
                border-2
               rounded-sm
               ${destacar ? `
                    bg-primary/15
                    border-primary
                    text-base-content
               ` : 'hover:bg-base-100 border-transparent text-gray-400'}
                `}
            onClick={() => onClick(cliente)}>
            <label>{cliente.nomeFantasia}</label>
        </li>
    )
}
import {Cliente} from "@/features/manager/gestaoCliente/cliente/ts/cliente";
import {icones} from "@/components/common/icones";

type Props = {
    destacar?: boolean
    cliente: Cliente
    onClick: (cliente: Cliente) => void;
}

export function ComponentePerfilClienteItem({destacar, cliente, onClick}: Props) {
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
            <div className={`flex w-full items-center justify-between`}>
                <label>{cliente.nomeFantasia}</label>
                <label className={`text-success`}>{cliente.checked && icones.check}</label>
            </div>
        </li>
    )
}
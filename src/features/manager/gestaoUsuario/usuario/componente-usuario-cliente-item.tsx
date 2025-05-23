import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {Checkbox} from "@/components/ui/checkbox/checkbox";
import React from "react";

type Props = {
    destacar?: boolean
    cliente: Cliente
    onClick: (cliente: Cliente) => void;
    onCheckCliente: (cliente: Cliente, valor: boolean) => void;
}

export function ComponenteUsuarioClienteItem({destacar, cliente, onClick, onCheckCliente}: Props) {
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
            <div className={`flex items-center gap-3`}>
                <Checkbox entidade={cliente}
                          onCheck={onCheckCliente}
                          atributo={'checked'}/>
                <label>{cliente.nomeFantasia}</label>
            </div>
        </li>
    )
}
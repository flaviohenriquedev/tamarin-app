import {Fieldset} from "@/components/ui/fieldset/Fieldset";
import {Empresa} from "@/features/manager/gestaoEmpresa/empresa/ts/empresa";
import React, {useCallback, useState} from "react";

type Props = {
    className: string;
    listaClientes: Empresa[];
    selecionarCliente: (cliente: Empresa) => void;
}

export function ComponenteUsuarioCliente({className, listaClientes, selecionarCliente }: Props) {

    const [idClienteSelecionado, setIdClienteSelecionado] = useState<string>()

    const selecionar = useCallback((
        (cliente: Empresa) => {
            setIdClienteSelecionado(cliente.id)
            selecionarCliente(cliente)
        }
    ), [selecionarCliente])

    return (
        <Fieldset label={`Clientes`} className={`${className} h-full`}>
            <ul className={`flex flex-col gap-1`}>
                {listaClientes && listaClientes.length > 0
                    ? listaClientes.map(cliente => {
                        return (
                            <li key={cliente.id}
                                className={`
                                    flex
                                    items-center
                                    gap-2
                                    p-2
                                    cursor-default
                                    border-2
                                    rounded-sm
                                       ${idClienteSelecionado === cliente.id ? `
                                            bg-primary/15
                                            border-primary
                                            text-base-content
                                       ` : 'hover:bg-base-100 border-transparent text-gray-400'}`}
                                onClick={() => selecionar(cliente)}>
                                <div className={`flex items-center gap-3`}>
                                    <label>{cliente.nomeFantasia}</label>
                                    <span>{cliente.checked}</span>
                                </div>
                            </li>
                        )
                    }) : (
                        <div className="skeleton h-full w-full"></div>
                    )}
            </ul>
        </Fieldset>
    )
}
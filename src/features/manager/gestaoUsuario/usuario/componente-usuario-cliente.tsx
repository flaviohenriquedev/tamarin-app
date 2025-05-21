import {Fieldset} from "@/components/ui/fieldset/fieldset";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {useCallback, useState} from "react";
import {ComponenteUsuarioClienteItem} from "@/features/manager/gestaoUsuario/usuario/componente-usuario-cliente-item";

type Props = {
    className: string;
    listaClientes: Cliente[];
    selecionarCliente: (cliente: Cliente) => void;
}

export function ComponenteUsuarioCliente({className, listaClientes, selecionarCliente }: Props) {

    const [idClienteSelecionado, setIdClienteSelecionado] = useState<string>()

    const selecionar = useCallback((
        (cliente: Cliente) => {
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
                            <ComponenteUsuarioClienteItem
                                key={cliente.id}
                                destacar={idClienteSelecionado === cliente.id}
                                cliente={cliente}
                                onClick={selecionar}/>
                        )
                    }) : (
                        <div className="skeleton h-full w-full"></div>
                    )}
            </ul>
        </Fieldset>
    )
}
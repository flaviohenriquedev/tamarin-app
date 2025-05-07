'use client'

import {ListTodo} from "lucide-react";
import React, {useContext, useEffect, useState} from "react";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {SideMenuContext} from "@/context/sidemenu-context";

const clienteService = new ClienteService();

export function ListaClientes() {
    const { setCliente } = useContext(SideMenuContext);
    const [listaClientes, setListaClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        clienteService.listar().then(result => setListaClientes(result));
    }, []);

    function getClientes() {
        if (listaClientes && listaClientes.length > 0) {
            return (
                <ul tabIndex={0} className="flex p-3 flex-col gap-1 border-2 border-primary dropdown-content menu bg-base-200 rounded-box z-1 w-52 shadow-lg">
                    {listaClientes.map(cliente => {
                        return (
                            <li key={cliente.id}
                                onClick={() => setCliente(cliente)}
                                className={`p-2 cursor-default bg-base-100 rounded-md hover:bg-base-200`}>
                                {cliente.nomeFantasia}
                            </li>
                        )
                    })}
                </ul>
            )
        }
    }

    return (
        <div className="dropdown dropdown-right">
            <div tabIndex={0} role="button" className="btn m-1 rounded-md">
                <ListTodo size={20}/>
            </div>
            {getClientes()}
        </div>
    )
}
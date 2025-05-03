'use client'

import {SelectItem} from "@/components/ui/select-item/select-item";
import React, {useContext, useEffect, useState} from "react";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {Cliente} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente";
import {SideMenuContext} from "@/context/sidemenu-context";
import {TSelectItemValue} from "@/components/ui/select-item/ts/TSelectItemValue";

const service = new ClienteService();
export function ClienteSelectItem() {
    const {setCliente} = useContext(SideMenuContext);
    const [listaCliente, setListaCliente] = useState<Cliente[]>([]);
    const [listaValores, setListaValores] = useState<TSelectItemValue[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaCliente(result)
            const listaValoresRetornados: TSelectItemValue[] = [];
            listaCliente.map(cliente => {
                listaValoresRetornados.push({
                    value: cliente.id,
                    label: cliente.nomeFantasia
                })
            })
            setListaValores(listaValoresRetornados);
        });
    }, [listaCliente]);

    return (
        <SelectItem onSelect={setCliente} values={listaValores}/>
    )
}
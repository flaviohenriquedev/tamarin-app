'use client'

import {SelectItem} from "@/components/ui/select-item/select-item";
import React, {useContext, useEffect, useState} from "react";
import {ClienteService} from "@/features/gerenciamento-sistema/gestao-cliente/cliente/ts/cliente-service";
import {SideMenuContext} from "@/context/sidemenu-context";
import {TSelectItem} from "@/components/ui/select-item/ts/TSelectItem";

const service = new ClienteService();

export function ClienteSelectItem() {
    const { setCliente } = useContext(SideMenuContext);
    const [listaValores, setListaValores] = useState<TSelectItem[]>([]);

    useEffect(() => {
        service.listar().then(result => {
            setListaValores(result.map(cliente => ({
                value: cliente.id,
                label: cliente.nomeFantasia
            })));
        });
    }, []);

    return (
        <SelectItem onSelect={setCliente} values={listaValores} />
    );
}

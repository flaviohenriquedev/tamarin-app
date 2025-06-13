import React from "react";
import {RouteType} from "@/types/_root/RouteType";
import {ItemListaMenu} from "@/components/layouts/layout-inicial/item-lista-menu";

type Props = {
    rotas: RouteType[];
}

export function ListaMenu({rotas}: Props) {
    return (
        <ul className={`
            flex
            max-h-[90vh]
            overflow-y-scroll
            flex-col
            gap-2
            border-t
            border-neutral-200
            pt-2
            overflow-x-hidden
            scrollbar-none
            truncate pb-32
        `}>
            {rotas.map((rota) => (
                <ItemListaMenu rota={rota} key={rota.id}/>
            ))}
        </ul>
    )
}



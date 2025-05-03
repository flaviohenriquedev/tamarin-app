'use client'

import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";
import React from "react";
import {Breadcrumb} from "@/components/ui/breadcrumb/breadcrumb";
import {RouteType} from "@/types/RouteType";
import {ThemeChanger} from "@/components/ui/theme-changer/theme-changer";
import {ClienteSelectItem} from "@/components/layouts/info-cliente/cliente-select-item";

type Props = {
    rotas?: RouteType[];
}

export function Header({rotas}: Props) {
    return (
        <header className={`content-header bg-base-200 flex items-center justify-between pl-3 pr-4 w-full h-14 border-b border-base-300/50`}>
            {rotas && <Breadcrumb rotas={rotas}/>}
            <div className={`flex items-center gap-10 ml-auto`}>
                <ClienteSelectItem />
                <ThemeChanger />
                <InfoUsuario/>
            </div>
        </header>
    )
}
'use client'

import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";
import React from "react";
import {Breadcrumb} from "@/components/ui/breadcrumb/breadcrumb";
import {ThemeChanger} from "@/components/ui/theme-changer/theme-changer";
import {SistemaType} from "@/features/sistema/types";
import {ComponenteSelecionarEmpresaSistema} from "@/components/layouts/header/ComponenteSelecionarEmpresaSistema";

type Props = {
    sistema?: SistemaType;
}

export function Header({sistema}: Props) {
    return (
        <header
            className={`content-header rounded-lg flex items-center justify-between pl-3 pr-4 w-full h-12 border-b border-base-300/50`}>
            <div className={`flex items-center gap-2 h-full`}>
                <ComponenteSelecionarEmpresaSistema sistema={sistema}/>
                {sistema && sistema.rotas && sistema.rotas.length > 0 && (
                    <div
                        className={`flex bg-base-100 items-center rounded-lg text-sm shadow-md h-full px-3 py-2 text-base-content/60`}>
                        <Breadcrumb rotas={sistema.rotas}/>
                    </div>
                )}
            </div>
            <div className={`flex items-center gap-10 ml-auto`}>
                <ThemeChanger/>
                <InfoUsuario/>
            </div>
        </header>
    )
}
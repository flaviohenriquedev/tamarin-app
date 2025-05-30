'use client'

import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";
import React from "react";
import {Breadcrumb} from "@/components/ui/breadcrumb/breadcrumb";
import {ThemeChanger} from "@/components/ui/theme-changer/theme-changer";
import {SistemaType} from "@/features/sistema/types";
import {useRouter} from "next/navigation";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";

type Props = {
    sistema?: SistemaType;
}

export function Header({sistema}: Props) {

    const router = useRouter();

    return (
        <header className={`content-header rounded-sm bg-base-200 flex items-center justify-between pl-3 pr-4 w-full h-16 border-b border-base-300/50`}>
            <div className={`flex items-center gap-2`}>
                <label className={`cursor-pointer text-sm text-base-content/60 hover:text-base-content`}
                       onClick={() => sistema && router.push(sistema.href)}>{sistema && SistemaENUMFactory.getDescricao(sistema.sistema)}</label>
                <div className="border-r self-stretch border-base-content/40"></div>
                {sistema && sistema.rotas && <Breadcrumb rotas={sistema.rotas}/>}
            </div>

            <div className={`flex items-center gap-10 ml-auto`}>
                <ThemeChanger />
                <InfoUsuario/>
            </div>
        </header>
    )
}
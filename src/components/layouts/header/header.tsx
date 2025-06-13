'use client'

import {InfoUsuario} from "@/components/layouts/info-usuario/info-usuario";
import React, {useContext} from "react";
import {Breadcrumb} from "@/components/ui/breadcrumb/breadcrumb";
import {ThemeChanger} from "@/components/ui/theme-changer/theme-changer";
import {SistemaType} from "@/features/sistema/types";
import {useRouter} from "next/navigation";
import {SistemaENUMFactory} from "@/features/sistema/enums/SistemaENUM";
import {EmpresaContext} from "@/context/useEmpresa";
import {Grip} from "lucide-react";
import Cookies from "js-cookie";

type Props = {
    sistema?: SistemaType;
}

export function Header({sistema}: Props) {
    const {empresa} = useContext(EmpresaContext)
    const router = useRouter();

    function onClick() {
        localStorage.removeItem("sistemaSelecionado")
        Cookies.remove("cliente_id")
        router.push("/");
    }

    return (
        <header
            className={`content-header rounded-lg flex items-center justify-between pl-3 pr-4 w-full h-12 border-b border-base-300/50`}>
            <div className={`flex items-center gap-2 h-full`}>
                <button
                    className={`h-full w-fit p-3 bg-base-100 cursor-pointer transition-transform duration-200 active:scale-90 shadow-md rounded-lg`}
                    onClick={onClick}>
                    <Grip/>
                </button>

                <div
                    className={`flex bg-base-100 items-center rounded-lg text-sm shadow-md h-full px-3 py-2 text-base-content/60`}>
                    <label><strong>{empresa.nomeFantasia}</strong></label>
                    <div className="divider divider-horizontal mx-1"/>
                    <label className={`cursor-pointer hover:text-base-content`}
                           onClick={() => sistema && router.push(sistema.href)}>{sistema && SistemaENUMFactory.getDescricao(sistema.sistema)}</label>
                </div>

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